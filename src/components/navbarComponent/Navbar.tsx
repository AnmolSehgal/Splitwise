import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOutRequest } from "../../store/actions/signOut";

import { GlobalState } from "../../store/types";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const Navbar = () => {
  const userLogin = useSelector(
    (state: GlobalState) => state.signIn.isLoggedIn
  );

  const dispatch = useDispatch();
  return (
    <div className="flex flex-row justify-between bg-primary items-center mb-6">
      <div className="text-lg text-white ml-2">Splitwize</div>
      <div className="flex flex-row ">
        {userLogin ? (
          ""
        ) : (
          <Link to="/SignIn">
            <ButtonComponent
              className="bg-secondary-600 rounded m-2 px-2 text-white"
              btnLabel="Sign in"
            />
          </Link>
        )}
        {userLogin ? (
          ""
        ) : (
          <Link to="/SignUp">
            <ButtonComponent
              className="bg-secondary-600 rounded m-2 px-2 text-white"
              btnLabel="Sign Up"
            />
          </Link>
        )}

        {userLogin ? (
          <Link to="/profile">
            <ButtonComponent
              className="bg-secondary-600 rounded m-2 px-2 text-white"
              btnLabel="Profile"
            />
          </Link>
        ) : (
          ""
        )}

        {userLogin ? (
          <ButtonComponent
            className="bg-secondary-600 rounded m-2 px-2 text-white"
            btnLabel="Sign Out"
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
