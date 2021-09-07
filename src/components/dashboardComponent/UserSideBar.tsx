import { useState } from "react";
import { Link } from "react-router-dom";
import AddFriendModalComponent from "../modalComponent/addFriendModal";
import UserFriendsList from "./userFriendsList";

const UserNavbar = () => {
  const [addFriend, setAddFriend] = useState(false);
  return (
    <div className="flex flex-col text-gray-500 px-3  font-mono pt-6 ">
      <Link to="/user/dashBoard">
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
