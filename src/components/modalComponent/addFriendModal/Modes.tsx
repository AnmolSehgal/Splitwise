import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addFriendUsingEmailRequest,
  addFriendUsingNameRequest,
} from "../../../store/actions/addFriendAction";
import PrimaryButton from "../../navbarComponent/PrimaryButtonComponent";
import FriendInputComponent from "./FriendInputComponent";

interface ModesProps {
  handleModes: (mode: string) => void;
  mode: string;
}

const Modes = ({ handleModes, mode }: ModesProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  return (() => {
    switch (mode) {
      case "email":
        return (
          <FriendInputComponent
            inputLabel={"Enter Email"}
            btnLabel="Add Friend"
            handleOnChange={(value) => {
              setEmail(value);
            }}
            inputType="email"
            inputVal={email}
            handleOnClick={() => {
              if (email) dispatch(addFriendUsingEmailRequest(email));
            }}
          />
        );
      case "name":
        return (
          <FriendInputComponent
            inputLabel={"Enter Name"}
            btnLabel="Add Friend"
            handleOnChange={(value) => {
              setName(value);
            }}
            inputType="text"
            inputVal={name}
            handleOnClick={() => {
              if (name) dispatch(addFriendUsingNameRequest(name));
            }}
          />
        );
      default:
        return (
          <div className={`flex flex-col items-center`}>
            <PrimaryButton
              label="Add friend's name"
              className={` p-5 ${mode?.length > 0 ? "hidden" : ""}`}
              onClick={() => {
                handleModes("name");
              }}
            />
            <div className={`my-6`}>Or</div>
            <PrimaryButton
              label="Add friend using Email"
              className={` p-5 `}
              onClick={() => {
                handleModes("email");
              }}
            />
          </div>
        );
    }
  })();
};
export default Modes;
