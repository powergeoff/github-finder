import React from "react";
import { IUserAction, IUserState, userInitialState } from "./UserState";
import { userReducer } from "./UserReducer";
import { User } from "../../models/User";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export interface IUserContext {
    user: User | undefined;
    getUser: (login: string) => void;
    clearUser: () => void;
}


export const UserContext = React.createContext<IUserContext | undefined>(undefined);

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = React.useReducer<React.Reducer<IUserState, IUserAction>>(userReducer, userInitialState);

    const getUser = async (login: string) => {
        const response = await fetch(`${GITHUB_URL}/users/${login}`);
        if (response.status === 404) {
            window.location.href = '/notfound';
        }
        else {
            const data = await response.json();
            dispatch({ type: 'SET', payload: { user: data } });
        }
    };

    const clearUser = () => dispatch({ type: 'CLEAR', payload: { user: undefined } });

    return <UserContext.Provider value={{ user: state.user, getUser, clearUser }}>{children}</UserContext.Provider>;
}

export default UserProvider;