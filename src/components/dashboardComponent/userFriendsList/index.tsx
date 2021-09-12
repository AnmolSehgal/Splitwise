import { RiAddLine } from "react-icons/ri";
import FriendsList from "./friendsList";
export interface userFriendsProps {
  handleChange: () => void;
}

const UserFriendsList = ({ handleChange }: userFriendsProps) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <div>Friends</div>
        <RiAddLine className=" text-froly text-2xl" onClick={handleChange} />
      </div>
      <FriendsList />
    </div>
  );
};

export default UserFriendsList;
