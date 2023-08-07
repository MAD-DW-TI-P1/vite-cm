import {createContext, useState} from "react";

import {ThemeContextState, MyCOntextProp} from "./types";

const contextDefaultValues: ThemeContextState = {
    theme: "claro",
    handleTheme: () => {}
};

export const ThemeContext = createContext<ThemeContextState>(
    contextDefaultValues
);

const ThemeProvider = ({children}: MyCOntextProp) => {
    const [theme, setTheme] = useState<string>(contextDefaultValues.theme);
    const handleTheme = (newTheme: string) => {
        if (newTheme === 'claro') setTheme("claro");
        else setTheme("oscuro");
    }
    return <ThemeContext.Provider value= {{
        theme,
        handleTheme,
    }}>
        {children}
    </ThemeContext.Provider>
};

export default ThemeProvider;


