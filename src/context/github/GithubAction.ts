import { IGithubState } from "./GithubState";

export interface IGithubAction {
  type: "SET_LOADING" | "SET_USERS";
  payload?: IGithubState;
}
