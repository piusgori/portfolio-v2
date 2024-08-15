import { createContext, ReactNode, useContext, useEffect, useState } from "react";

const AppContext = createContext({
    appLoaded: false,
    setModelsLoaded: (_: boolean) => { }
});

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('Context Should be provided');
    return context;
}

const AppContextProvider = ({ children }: { children: ReactNode }) => {

    const [modelsLoaded, setModelsLoaded] = useState<boolean>(false);
    const [appLoaded, setAppLoaded] = useState<boolean>(false);

    useEffect(() => {
        if (modelsLoaded) {
            setTimeout(() => {
                setAppLoaded(true)
            }, 1000)
        }
    }, [modelsLoaded])

    const value = {
        appLoaded,
        setModelsLoaded,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export default AppContextProvider;