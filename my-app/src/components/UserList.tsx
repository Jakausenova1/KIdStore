import { FC } from "react";
import { IUser } from "./Types";

interface UserListProps {
  users: IUser[]
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {/* {users.map((user) => 
        // <UserItem key={user.id} user ={user}/>
      )} */}
    </div>
  );
};

export default UserList;
