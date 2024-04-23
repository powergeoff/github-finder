import { useContext, useEffect } from "react";
import UserResults from "../components/users/UserResults";
import Spinner from "../components/layout/Spinner";
import { GithubContext, IGithubContext } from "../context/github/GithubContext";

const Home = () => {
    const { users, loading, fetchUsers } = useContext(GithubContext) as IGithubContext;
    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <div>
            {loading ? <Spinner /> : users ? <UserResults users={users} /> : <></>}
        </div>
    );
}
export default Home;