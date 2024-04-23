import * as React from "react";
import { User } from "../../models/Users";
import githubReducer from "./GithubReducer";
import { IGithubState, githubInitialState } from "./GithubState";
import { IGithubAction } from "./GithubAction";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export interface IGithubContext extends IGithubState {
    fetchUsers: () => {};
}



export const GithubContext = React.createContext<IGithubContext | undefined>(undefined);

const GithubProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [state, dispatch] = React.useReducer<React.Reducer<IGithubState, IGithubAction>>(githubReducer, githubInitialState);

    const fetchUsers = async () => {
        setLoading();
        const response = await fetch(`${GITHUB_URL}/users`);
        const data = await response.json();
        dispatch({
            type: 'SET_USERS',
            payload: {
                users: data,
            }
        })
        cancelLoading();
    };
    const cancelLoading = () => dispatch({ type: 'SET_LOADING', payload: { loading: false } });
    const setLoading = () => dispatch({ type: 'SET_LOADING', payload: { loading: true } });

    return <GithubContext.Provider value={{ users: state.users, loading: state.loading, fetchUsers }}>{children}</GithubContext.Provider>;
};

export default GithubProvider;
