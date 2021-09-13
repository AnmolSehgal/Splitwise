import { Friend } from "../../../store/types";

interface FriendsProps {
  friends: Friend[];
}

const FriendsList = ({ friends }: FriendsProps) => {
  console.log(friends);
  return (
    <div className=" flex flex-col">
      {friends.map(({ relationId, userName, email }, index) => {
        console.log(relationId + " id ------ " + userName);
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
