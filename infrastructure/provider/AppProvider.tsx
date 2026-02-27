import React from "react";
import {
    ActivityIndicator,
    Modal,
    Platform,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";

import {
    MutationCache,
    QueryCache,
    QueryClient,
    QueryClientProvider,
    useIsFetching,
    useIsMutating,
} from "@tanstack/react-query";

type ErrorModalState = {
  visible: boolean;
  title: string;
  message: string;
  detail?: string;
};

type AppUIContextValue = {
  showError: (error: unknown, options?: { title?: string }) => void;
  hideError: () => void;
  startLoading: () => void;
  stopLoading: () => void;
  setLoading: (loading: boolean) => void;
};

const AppUIContext = React.createContext<AppUIContextValue | null>(null);

export function useAppUI(): AppUIContextValue {
  const ctx = React.useContext(AppUIContext);
  if (!ctx) throw new Error("useAppUI must be used within AppProvider");
  return ctx;
}

function normalizeError(error: unknown): Pick<ErrorModalState, "title" | "message" | "detail"> {
  if (typeof error === "string") {
    return { title: "Error", message: error };
  }

  if (error && typeof error === "object") {
    const anyErr = error as any;

    if (typeof anyErr?.message === "string") {
      return {
        title: anyErr?.type === "NETWORK_ERROR" ? "Network error" : "Error",
        message: anyErr.message,
        detail:
          typeof anyErr?.status === "number"
            ? `Status: ${anyErr.status}${anyErr?.code ? ` (${anyErr.code})` : ""}`
            : undefined,
      };
    }

    if (typeof anyErr?.error === "string") {
      return { title: "Error", message: anyErr.error };
    }
  }

  return { title: "Error", message: "Something went wrong" };
}

function GlobalLoadingOverlay({ manualCount }: { manualCount: number }) {
  const fetching = useIsFetching();
  const mutating = useIsMutating();
  const visible = fetching + mutating + manualCount > 0;

  if (!visible) return null;

  return (
    <View style={styles.loadingOverlay} pointerEvents="auto">
      <View style={styles.loadingCard}>
        <ActivityIndicator size="large" />
        <Text style={styles.loadingText}>Loading…</Text>
      </View>
    </View>
  );
}

type Props = {
  children: React.ReactNode;
};

export function AppProvider({ children }: Props) {
  const [manualLoadingCount, setManualLoadingCount] = React.useState(0);
  const [errorModal, setErrorModal] = React.useState<ErrorModalState>({
    visible: false,
    title: "Error",
    message: "",
  });

  const lastErrorKeyRef = React.useRef<string | null>(null);
  const showErrorRef = React.useRef<(error: unknown) => void>(() => undefined);

  const hideError = React.useCallback(() => {
    setErrorModal((s) => ({ ...s, visible: false }));
  }, []);

  const showError = React.useCallback((error: unknown, options?: { title?: string }) => {
    const normalized = normalizeError(error);
    const title = options?.title ?? normalized.title;
    const key = `${title}|${normalized.message}|${normalized.detail ?? ""}`;

    if (errorModal.visible && lastErrorKeyRef.current === key) return;
    lastErrorKeyRef.current = key;

    setErrorModal({
      visible: true,
      title,
      message: normalized.message,
      detail: normalized.detail,
    });
  }, [errorModal.visible]);

  showErrorRef.current = (err: unknown) => showError(err);

  const queryClientRef = React.useRef<QueryClient | null>(null);
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      queryCache: new QueryCache({
        onError: (err, query) => {
          const meta = (query as any)?.meta as any | undefined;
          if (meta?.suppressGlobalError) return;
          showErrorRef.current(err);
        },
      }),
      mutationCache: new MutationCache({
        onError: (err, _variables, _context, mutation) => {
          const meta = (mutation as any)?.meta as any | undefined;
          if (meta?.suppressGlobalError) return;
          showErrorRef.current(err);
        },
      }),
      defaultOptions: {
        queries: {
          retry: Platform.OS === "web" ? 1 : 0,
        },
        mutations: {
          retry: 0,
        },
      },
    });
  }

  const startLoading = React.useCallback(() => {
    setManualLoadingCount((c) => c + 1);
  }, []);

  const stopLoading = React.useCallback(() => {
    setManualLoadingCount((c) => Math.max(0, c - 1));
  }, []);

  const setLoading = React.useCallback((loading: boolean) => {
    setManualLoadingCount(loading ? 1 : 0);
  }, []);

  const ctxValue = React.useMemo<AppUIContextValue>(
    () => ({ showError, hideError, startLoading, stopLoading, setLoading }),
    [showError, hideError, startLoading, stopLoading, setLoading]
  );

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <AppUIContext.Provider value={ctxValue}>
        {children}
        <GlobalLoadingOverlay manualCount={manualLoadingCount} />
        <Modal
          visible={errorModal.visible}
          transparent
          animationType="fade"
          onRequestClose={hideError}
        >
          <View style={styles.modalBackdrop}>
            <View style={styles.modalCard}>
              <Text style={styles.modalTitle}>{errorModal.title}</Text>
              <Text style={styles.modalMessage}>{errorModal.message}</Text>
              {!!errorModal.detail && <Text style={styles.modalDetail}>{errorModal.detail}</Text>}
              <View style={styles.modalActions}>
                <Pressable onPress={hideError} style={styles.modalButton}>
                  <Text style={styles.modalButtonText}>Close</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </AppUIContext.Provider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.12)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 999,
  },
  loadingCard: {
    minWidth: 140,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderRadius: 12,
    backgroundColor: "rgba(255,255,255,0.95)",
    alignItems: "center",
    gap: 10,
  },
  loadingText: {
    fontSize: 14,
    color: "#222",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    alignItems: "center",
    justifyContent: "center",
    padding: 18,
  },
  modalCard: {
    width: "100%",
    maxWidth: 420,
    borderRadius: 14,
    backgroundColor: "#fff",
    padding: 16,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
    color: "#111",
  },
  modalMessage: {
    fontSize: 14,
    color: "#222",
  },
  modalDetail: {
    marginTop: 8,
    fontSize: 12,
    color: "#666",
  },
  modalActions: {
    marginTop: 14,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  modalButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: "#111827",
  },
  modalButtonText: {
    color: "#fff",
    fontWeight: "600",
  },
});
