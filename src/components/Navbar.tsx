import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between bg-primary items-center">
      <div className="text-lg text-white ml-2">Splitwize</div>
      <div className="flex flex-row ">
        <Link to="/SignIn">
          <ButtonComponent
            className="bg-secondary-600 rounded m-2 px-2 text-white"
            btnLabel="Sign in"
          />
        </Link>
        <Link to="/SignUp">
          <ButtonComponent
            className="bg-secondary-600 rounded m-2 px-2 text-white"
            btnLabel="Sign Up"
          />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
