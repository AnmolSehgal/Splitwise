import { RiAddLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../store/types";
import FriendsList from "./FriendsList";

export interface userFriendsProps {
  handleChange: () => void;
}

const UserFriendsList = ({ handleChange }: userFriendsProps) => {
  const friendsList = useSelector(
    (state: GlobalState) => state.friends.friends
  );
  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <div>Friends</div>
        <RiAddLine className=" text-froly text-2xl" onClick={handleChange} />
      </div>
      <FriendsList friends={friendsList} />
    </div>
  );
};

export default UserFriendsList;
