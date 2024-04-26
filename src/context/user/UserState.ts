import { User } from "../../models/User";

export interface IUserState {
  user: User | undefined;
}

export interface IUserAction {
  type: "CLEAR" | "SET";
  payload: IUserState;
}

export const userInitialState: IUserState = {
  user: undefined,
};
