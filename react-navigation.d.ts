declare namespace ReactNavigation {
  interface RootParamList {}

  // react-navigation internals reference this global type.
  // Keep it minimal but structurally compatible.
  interface Theme {
    dark: boolean;
    colors: Record<string, string>;
  }
}
