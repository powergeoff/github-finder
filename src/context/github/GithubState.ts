import { User } from "../../models/User";

export interface IGithubState {
  users?: User[];
  total?: number;
}

export const githubInitialState: IGithubState = {
  users: [],
  total: 0,
};
