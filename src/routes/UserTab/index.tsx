import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router";
import DashboardComponent from "../../components/DashboardComponent/UserDashboard";
import FriendExpenseTab from "../../components/DashboardComponent/FriendExpenseTab";

import UserNavbar from "../../components/DashboardComponent/UserSideBar";
import { GlobalState } from "../../store/types";
import LoaderComponent from "../../components/LoaderComponent";
import { routes } from "../../utils/constants/routeConstant";

export interface UserTabInterface {
  mode: string;
  id?: string;
}

const UserTab = () => {
  const { mode, id } = useParams<UserTabInterface>();
  const { friends } = useSelector((state: GlobalState) => state.friends);

  const isLoader = useSelector((state: GlobalState) => state.loader.isLoader);

  return isLoader ? (
    <LoaderComponent />
  ) : (
    <div className="flex justify-center w-screen md:w-full">
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
                <Redirect to={routes.DASHBOARD} />;
            }
          })(mode)}
        </div>
      </div>
    </div>
  );
};
export default UserTab;
