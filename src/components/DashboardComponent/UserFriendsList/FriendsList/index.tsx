import { useSelector } from "react-redux";
import history from "../../../../store/history";
import { GlobalState } from "../../../../store/types";

const FriendsList = () => {
  const { friends, isLoader } = useSelector(
    (state: GlobalState) => state.friends
  );
  const { friendListLoader, isLoader: getDataLoader } = useSelector(
    (state: GlobalState) => state.loader
  );

  return (
    <div className=" flex flex-col items-start w-full">
      {friends.map(({ userName, friendUID }, index) => {
        return (
          <button
            className="flex flex-row w-full border-b"
            disabled={isLoader || getDataLoader || friendListLoader}
            onClick={() => {
              history.push(`/friend/${friendUID}`);
            }}
            key={index}
          >
            <div className="p-2 mx-2">{userName}</div>
          </button>
        );
      })}
    </div>
  );
};

export default FriendsList;
