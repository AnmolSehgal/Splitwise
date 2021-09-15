import { RiAddLine } from "react-icons/ri";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../store/types";

import MdLoaderComponent from "../../LoaderComponent/MdLoaderComponent";
import FriendsList from "./FriendsList";
export interface userFriendsProps {
  handleChange: () => void;
}

const UserFriendsList = ({ handleChange }: userFriendsProps) => {
  const friendListLoader = useSelector(
    (state: GlobalState) => state.loader.friendListLoader
  );

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between">
        <div>Friends</div>
        <button onClick={handleChange} disabled={friendListLoader}>
          <RiAddLine className=" text-froly text-2xl" />
        </button>
      </div>
      <FriendsList />
      {friendListLoader ? <MdLoaderComponent /> : null}
    </div>
  );
};

export default UserFriendsList;
