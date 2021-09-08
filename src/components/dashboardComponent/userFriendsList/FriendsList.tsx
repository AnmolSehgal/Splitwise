import { Friend } from "../../../store/types";

interface FriendsProps {
  friends: Friend[];
}

const FriendsList = ({ friends }: FriendsProps) => {
  return (
    <div className=" flex flex-col">
      {friends.map(({ userName, friendUID }, index) => {
        return (
          <div key={index} className="p-2 border-b mx-2">
            {userName}
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
