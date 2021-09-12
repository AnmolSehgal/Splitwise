import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import DashboardComponent from "../../components/dashboardComponent/userDashboard";
import FriendExpenseTab from "../../components/dashboardComponent/friendExpenseTab";

import UserNavbar from "../../components/dashboardComponent/userSideBar";
import { GlobalState } from "../../store/types";

export interface UserTabInterface {
  mode: string;
  id?: string;
}

const UserTab = () => {
  const { mode, id } = useParams<UserTabInterface>();
  const { friends } = useSelector((state: GlobalState) => state.friends);
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-row w-11/12 bg-white justify-evenly border rounded-xl min-h-100 p-3 shadow-xl">
        <div className="flex flex-col w-3/12 border-r">
          <UserNavbar />
        </div>
        <div className="flex flex-col w-9/12">
          {((mode: string) => {
            switch (mode) {
              case "dashboard":
                return <DashboardComponent />;
              case "friend": {
                const index = friends.findIndex((friend) => {
                  return friend.friendUID === id;
                });
                if (index >= 0) return <FriendExpenseTab {...friends[index]} />;
                return;
              }
              default:
                <Redirect to="/user/dashboard" />;
            }
          })(mode)}
        </div>
      </div>
    </div>
  );
};
export default UserTab;
