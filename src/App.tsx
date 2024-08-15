import AppContextProvider from "./contexts/app.context"
import MainPage from "./pages/main"

function App() {

  return (
    <AppContextProvider>
      <div className='relative z-0 bg-primary'>
        <MainPage />
      </div>
    </AppContextProvider>
  )
}

export default App
