import { User } from "../../models/Users";

export interface IGithubState {
  users?: User[];
  loading?: boolean;
}

export const githubInitialState: IGithubState = {
  users: [],
  loading: false,
};
