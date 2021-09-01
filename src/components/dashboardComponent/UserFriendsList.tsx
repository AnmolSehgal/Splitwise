import { RiAddLine } from "react-icons/ri";

export interface userFriendsProps {
  handleChange: () => void;
}

const UserFriendsList = ({ handleChange }: userFriendsProps) => {
  return (
    <div className="">
      <div className="flex flex-row items-center justify-between">
        <div>Friends</div>
        <RiAddLine className=" text-froly text-2xl" onClick={handleChange} />
      </div>
    </div>
  );
};

export default UserFriendsList;
