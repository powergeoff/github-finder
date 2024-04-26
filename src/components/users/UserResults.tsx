import { User } from "../../models/User";
import UserItem from "./UserItem";

interface Props {
    users: User[];
}

const UserResults = ({ users }: Props) => {
    return (
        <>
            <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
                {users.map((user, index) => (
                    <UserItem key={index} user={user} />
                ))}
            </div>

        </>
    )
}

export default UserResults;