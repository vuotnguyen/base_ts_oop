import { authenUseCase } from "@/application/useCase";
import { useMutation, UseMutationResult, useQueryClient } from "@tanstack/react-query";


const authenKeys = {
  all: ["auth"] as const,
  detail: (id: string) => ["auth", id] as const,
};

export const useLogin = (account: string, password: string): UseMutationResult<void, unknown, { account: string; password: string }>     => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: ({ account, password }) => {
            // Call your login API here with the provided account and password
            // For example:
            return authenUseCase.executeLogin(account, password);
        },
        onSuccess: () => {
            // Invalidate any relevant queries or perform any necessary actions on successful login
            qc.invalidateQueries({ queryKey: authenKeys.all });
        },
    });
}
export const useLogout = (): UseMutationResult<void, unknown, void> => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: () => {
            // Call your logout API here
            return authenUseCase.executeLogout();
        },
        onSuccess: () => {
            // Invalidate any relevant queries or perform any necessary actions on successful logout
            qc.invalidateQueries({ queryKey: authenKeys.all });
        },
    });
}
export const useRefreshToken = (): UseMutationResult<void, unknown, void> => {
    const qc = useQueryClient();
    return useMutation({
        mutationFn: () => {
            // Call your refresh token API here
            return authenUseCase.executeRefreshToken();
        },
        onSuccess: () => {
            // Invalidate any relevant queries or perform any necessary actions on successful token refresh
            qc.invalidateQueries({ queryKey: authenKeys.all });
        },
    });
}