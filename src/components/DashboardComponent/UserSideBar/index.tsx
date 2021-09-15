import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GlobalState } from "../../../store/types";
import { routes } from "../../../utils/constants/routeConstant";
import AddFriendModalComponent from "../../ModalComponent/addFriendModal";
import UserFriendsList from "../UserFriendsList";

const UserNavbar = () => {
  const [addFriend, setAddFriend] = useState(false);
  const { friendListLoader, isLoader: addExpenseLoader } = useSelector(
    (state: GlobalState) => state.loader
  );

  return (
    <div className="flex flex-col text-gray-500 px-3  font-mono pt-6 ">
      <button
        className="flex flex-row w-full"
        disabled={addExpenseLoader || friendListLoader}
      >
        <Link to={routes.DASHBOARD}>
          <div className="mb-3">Dashboard</div>
        </Link>
      </button>
      <div className="mb-3">
        <UserFriendsList
          handleChange={() => {
            setAddFriend(true);
          }}
        />
      </div>
      <AddFriendModalComponent
        display={addFriend}
        handleDisplay={() => {
          setAddFriend(false);
        }}
      />
    </div>
  );
};

export default UserNavbar;
