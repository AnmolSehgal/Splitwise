import { useState } from "react";
import { useDispatch } from "react-redux";
import { showErrorRequest } from "../../../../store/actions/errorsActions";
import {
  addFriendUsingEmailRequest,
  addFriendUsingNameRequest,
} from "../../../../store/actions/friendAction";
import PrimaryButton from "../../../navbarComponent/primaryButtonComponent";
import FriendInputComponent from "../friendInputComponent";
import { regExp } from "../../../type";
import { EMAIL } from "../../../../utils/appConstant";
interface ModesProps {
  handleModes: (mode: string) => void;
  handleDispaly: () => void;
  mode: string;
}

const Modes = ({ handleModes, handleDispaly, mode }: ModesProps) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  return (() => {
    switch (mode) {
      case EMAIL:
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
              if (regExp.test(email) && email !== localStorage.getItem(EMAIL)) {
                dispatch(addFriendUsingEmailRequest(email));
                setEmail("");
                handleModes("");
                handleDispaly();
              } else {
                dispatch(showErrorRequest("please enter valid email id"));
                setEmail("");
                handleModes("");
                handleDispaly();
              }
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
              if (name) {
                dispatch(addFriendUsingNameRequest(name));
                setName("");
                handleModes("");
                handleDispaly();
              } else {
                dispatch(showErrorRequest("please enter friend's name"));
                setName("");
                handleModes("");
                handleDispaly();
              }
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
                handleModes(EMAIL);
              }}
            />
          </div>
        );
    }
  })();
};
export default Modes;
