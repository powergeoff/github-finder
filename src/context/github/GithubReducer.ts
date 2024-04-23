import { IGithubAction } from "./GithubAction";
import { IGithubState } from "./GithubState";

const githubReducer: React.Reducer<IGithubState, IGithubAction> = (
  state,
  action
) => {
  switch (
    action.type //'CLEAR_USERS'
  ) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload?.users,
        total: action.payload?.total,
      };
    case "CLEAR_USERS":
      return {
        ...state,
        users: [],
        total: 0,
      };
    default:
      return state;
  }
};

export default githubReducer;
