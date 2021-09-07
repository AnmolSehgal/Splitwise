import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOutRequest } from "../../store/actions/signOut";

import { GlobalState } from "../../store/types";
import NavbarButton from "./NavbarButtonComponent";

const Navbar = () => {
  const userLogin = useSelector(
    (state: GlobalState) => state.signIn.isLoggedIn
  );

  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-between items-center mb-6 py-2">
      <div className=" font-mono font-bold text-gray-700 font ml-2 text-3xl">
        Splitwize
      </div>
      <div className="flex flex-row ">
        {userLogin ? (
          ""
        ) : (
          <Link to="/SignIn">
            <NavbarButton label="Sign In" />
          </Link>
        )}
        {userLogin ? (
          ""
        ) : (
          <Link to="/SignUp">
            <NavbarButton label="Sign Up" />
          </Link>
        )}

        {userLogin ? (
          <Link to="/profile">
            <NavbarButton label="Profile" />
          </Link>
        ) : (
          ""
        )}

        {userLogin ? (
          <NavbarButton
            label="Sign out"
            onClick={() => {
              dispatch(signOutRequest());
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
