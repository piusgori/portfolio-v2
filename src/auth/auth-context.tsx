import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { auth } from "../utils/firebase";

const AuthContext = createContext({
    user: null,
    isAuthenticated: false,
    isInitialized: false,
    register: async () => {},
    login: async () => {},
});

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("Context must be used within an AuthProvider");
    return context;
}

const INITIAL_STATE = {
    isInitialized: false,
    isAuthenticated: false,
    user: null,
}

enum dispatchActionTypes { 
    INITIAL = 'INITIAL',
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER'
 }

 const reducerFunction = (state: any, action: any) => {
    if (action.type === dispatchActionTypes.INITIAL) {
        return {
            ...state,
            isInitialized: true,
            isAuthenticated: action.payload.isAuthenticated,
            user: action.payload.user,
        }
    }
    if (action.type === dispatchActionTypes.REGISTER || action.type === dispatchActionTypes.LOGIN) {
        return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user,
        }
    }
    return state
 }

const AuthContextProvider = ({ children }: { children: ReactNode }) => {

    const [state, dispatch] = useReducer(reducerFunction, INITIAL_STATE);

    const register = async () => {}

    const login = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential?.accessToken;
        const user = result.user;
        if (user.email !== 'piusgori@gmail.com') throw new Error('You are not authorized to access this application');
        dispatch({ type: dispatchActionTypes.LOGIN, payload: { user } });
    };

    const initialHandler = async () => {
        dispatch({ type: dispatchActionTypes.INITIAL, payload: { user: null, isAuthenticated: false } })
    }

    useEffect(() => {
        initialHandler();
    }, [])

    const value = {
        isInitialized: state.isInitialized,
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        register,
        login
    }

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    )

}

export default AuthContextProvider;