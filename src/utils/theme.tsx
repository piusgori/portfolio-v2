import { createTheme, CssBaseline, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { font, PRIMARY_COLOR } from "./config";
import { ReactNode } from "react";
import GlobalStyles from "./global-styles";

const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: PRIMARY_COLOR,
        },
        background: {
            default: '#0b0a19'
        }
    },
    typography: {
        fontFamily: font.style.fontFamily
    },
    components: {
        MuiButton: {
            defaultProps: {
                disableElevation: true,
            },
            styleOverrides: {
                root: {
                    textTransform: 'capitalize'
                }
            }
        }
    }
});

export default function ThemeProvider ({ children }: { children: ReactNode }) {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyles />
            {children}
        </MuiThemeProvider>
    )
}