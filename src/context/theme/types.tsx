export interface ThemeContextState {
    theme: string; // claro o escuro
    handleTheme: (nameTheme: string) => void;
}

export interface MyContextProp {
    children:JSX.Element
}