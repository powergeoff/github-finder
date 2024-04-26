import { IUserAction, IUserState } from "./UserState";

export const userReducer: React.Reducer<IUserState, IUserAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "SET":
      return action.payload;
    case "CLEAR":
      return action.payload;
    default:
      return state;
  }
};
