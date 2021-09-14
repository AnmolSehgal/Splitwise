import { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../../../utils/constants/routeConstant";
import AddFriendModalComponent from "../../ModalComponent/addFriendModal";
import UserFriendsList from "../UserFriendsList";

const UserNavbar = () => {
  const [addFriend, setAddFriend] = useState(false);
  return (
    <div className="flex flex-col text-gray-500 px-3  font-mono pt-6 ">
      <Link to={routes.DASHBOARD}>
        <div className="mb-3">Dashboard</div>
      </Link>
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
