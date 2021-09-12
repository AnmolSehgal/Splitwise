import { useSelector } from "react-redux";
import history from "../../../../store/history/history";
import { GlobalState } from "../../../../store/types";

const FriendsList = () => {
  const friends = useSelector((state: GlobalState) => state.friends.friends);
  return (
    <div className=" flex flex-col">
      {friends.map(({ userName, friendUID }, index) => {
        return (
          <div
            key={index}
            className="p-2 border-b mx-2"
            onClick={() => {
              history.push(`/user/friend/${friendUID}`);
            }}
          >
            {userName}
          </div>
        );
      })}
    </div>
  );
};

export default FriendsList;
