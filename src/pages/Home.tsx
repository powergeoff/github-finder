import { useContext } from "react";
import UserResults from "../components/users/UserResults";
import Spinner from "../components/layout/Spinner";
import { GithubContext, IGithubContext } from "../context/github/GithubContext";
import UserSearch from "../components/users/UserSearch";
import { ILoadingContext, LoadingContext } from "../context/loading/LoadingContext";

const Home = () => {
    const { users } = useContext(GithubContext) as IGithubContext;
    const { loading } = useContext(LoadingContext) as ILoadingContext;

    return (
        <div>
            <UserSearch />
            {loading ? <Spinner /> : users ? <UserResults users={users} /> : <></>}
        </div>
    );
}
export default Home;