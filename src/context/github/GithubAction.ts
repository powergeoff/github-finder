import { IGithubState } from "./GithubState";

export interface IGithubAction {
  type: "SET_USERS" | "CLEAR_USERS";
  payload?: IGithubState;
}
