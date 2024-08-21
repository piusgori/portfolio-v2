import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import GlobalStyles from "./global-styles";
import { FONT_FAMILY, PRIMARY_MAIN } from "../config";
import { componentsOverrides } from "./overrides";

export const fontFamily = FONT_FAMILY

const theme: any = createTheme({
    palette: {
        primary: { main: PRIMARY_MAIN },
    },
    typography: {
        fontFamily
    }
});

theme.components = componentsOverrides(theme);

export default function ThemeProvider ({ children }: { children: ReactNode }) {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            {children}
        </MuiThemeProvider>
    )
}