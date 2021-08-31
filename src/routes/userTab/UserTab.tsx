import { Redirect, useParams } from "react-router";
import UserNavbar from "../../components/dashboardComponent/UserNavbar";

export interface UserTabInterface {
  mode: string;
  id?: string;
}

const UserTab = () => {
  const { mode, id } = useParams<UserTabInterface>();
  return (
    <div className="flex justify-center">
      <div className="flex flex-row w-11/12 justify-evenly ">
        <div className="flex flex-col w-2/12">
          <UserNavbar />
        </div>
        <div className="flex flex-col w-7/12">
          {((mode: string) => {
            switch (mode) {
              case "dashboard":
                return <div>Dashboard</div>;
              case "all":
                return <div>Expression</div>;
              case "friend": {
                return <div>{id}</div>;
              }
              default:
                <Redirect to="/user/dashboard" />;
            }
          })(mode)}
        </div>
        <div className="flex flex-col w-2/12"></div>
        <div></div>
      </div>
    </div>
  );
};
export default UserTab;
