import AuthContextProvider from "./auth/auth-context"
import AppContextProvider from "./contexts/app.context"
import Router from "./routes"
import ThemeProvider from "./utils/theme";
import { SnackbarProvider } from 'notistack';

function App() {

  return (
    <AuthContextProvider>
      <AppContextProvider>
        <ThemeProvider>
          <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
            <Router />
          </SnackbarProvider>
        </ThemeProvider>
      </AppContextProvider>
    </AuthContextProvider>
  )
}

export default App
