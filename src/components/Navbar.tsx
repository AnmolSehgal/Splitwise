import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signOutAction } from "../store/actions/profileActions";
import ButtonComponent from "./ButtonComponent";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-between bg-primary items-center mb-6">
      <div className="text-lg text-white ml-2">Splitwize</div>
      <div className="flex flex-row ">
        {localStorage.getItem("uid") ? (
          ""
        ) : (
          <Link to="/SignIn">
            <ButtonComponent
              className="bg-secondary-600 rounded m-2 px-2 text-white"
              btnLabel="Sign in"
            />
          </Link>
        )}
        {localStorage.getItem("uid") ? (
          ""
        ) : (
          <Link to="/SignUp">
            <ButtonComponent
              className="bg-secondary-600 rounded m-2 px-2 text-white"
              btnLabel="Sign Up"
            />
          </Link>
        )}

        {localStorage.getItem("uid") ? (
          <Link to="/profile">
            <ButtonComponent
              className="bg-secondary-600 rounded m-2 px-2 text-white"
              btnLabel="Profile"
            />
          </Link>
        ) : (
          ""
        )}

        {localStorage.getItem("uid") ? (
          <ButtonComponent
            className="bg-secondary-600 rounded m-2 px-2 text-white"
            btnLabel="Sign Out"
            onClick={() => {
              dispatch(signOutAction());
            }}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Navbar;
