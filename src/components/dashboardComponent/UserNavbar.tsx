import { Link } from "react-router-dom";
import UserFriendsList from "./UserFriendsList";

const UserNavbar = () => {
  return (
    <div className="flex flex-col text-gray-400 px-3  font-mono">
      <Link to="/user/dashBoard">
        <div>Dashboard</div>
      </Link>
      <Link to="/user/expense">
        <div>All Expenses</div>
      </Link>
      <div>
        <UserFriendsList />
      </div>
    </div>
  );
};

export default UserNavbar;
