export interface ThemeContextState {
    theme: string; // claro o escuro
    handleTheme: (nameTheme: string) => void;
}

export interface MyCOntextProp {
    children:JSX.Element
}