import * as React from "react";
import githubReducer from "./GithubReducer";
import { IGithubState, githubInitialState } from "./GithubState";
import { IGithubAction } from "./GithubAction";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

export interface IGithubContext extends IGithubState {
    fetchUsers: () => {};
    searchUsers: (user: string) => Promise<void>;
    clearUsers: () => void;
}



export const GithubContext = React.createContext<IGithubContext | undefined>(undefined);

const GithubProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [state, dispatch] = React.useReducer<React.Reducer<IGithubState, IGithubAction>>(githubReducer, githubInitialState);

    //testing only for all users
    const fetchUsers = async () => {
        const response = await fetch(`${GITHUB_URL}/users`);
        const data = await response.json();
        console.log(data)
        dispatch({
            type: 'SET_USERS',
            payload: {
                users: data,
                total: data.total_count
            }
        })
    };


    const searchUsers = async (user: string) => {
        const response = await fetch(`${GITHUB_URL}/search/users?q=${user}`);
        const { items, total_count } = await response.json();
        dispatch({
            type: 'SET_USERS',
            payload: {
                users: items,
                total: total_count
            }
        })
    }

    const clearUsers = () => dispatch({ type: 'CLEAR_USERS', payload: { total: 0 } })

    return <GithubContext.Provider value={{ users: state.users, total: state.total, fetchUsers, searchUsers, clearUsers }}>{children}</GithubContext.Provider>;
};

export default GithubProvider;
