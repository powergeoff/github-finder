import { IGithubAction } from "./GithubAction";
import { IGithubState } from "./GithubState";

const githubReducer: React.Reducer<IGithubState, IGithubAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload?.users,
      };
    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload?.loading,
      };
    default:
      return state;
  }
};

export default githubReducer;
