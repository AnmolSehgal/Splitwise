import { useState } from "react";
import { BsX, BsArrowLeftShort } from "react-icons/bs";
import InputComponent from "../inputComponent/InputComponent";
import PrimaryButton from "../navbarComponent/PrimaryButtonComponent";
import Modal from "./Modal";

export interface AddFriendProps {
  display: boolean;
  handleDisplay: () => void;
}

const AddFriendModalComponent = ({
  display,
  handleDisplay,
}: AddFriendProps) => {
  const [mode, setMode] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  return (
    <Modal display={display}>
      <div className="flex flex-col opacity-100 bg-white w-80 border rounded-xl text-gray-700 p-5">
        <div
          className={`flex flex-row w-full text-2xl ${
            mode?.length > 0 ? "justify-between" : " justify-end"
          }`}
        >
          {mode?.length > 0 ? (
            <BsArrowLeftShort
              onClick={() => {
                setMode("");
              }}
            />
          ) : (
            ""
          )}
          <BsX
            onClick={() => {
              handleDisplay();
            }}
          />
        </div>
        {((mode: string) => {
          switch (mode) {
            case "email":
              return (
                <div className="mt-4">
                  {" "}
                  <InputComponent
                    onChange={(value) => {
                      setEmail(value);
                    }}
                    label="Enter Email"
                    inputType="email"
                    inputVal={email}
                  />
                  <PrimaryButton label="Add friend" />
                </div>
              );
            case "name":
              return (
                <div className="mt-4">
                  {" "}
                  <InputComponent
                    onChange={(value) => {
                      setName(value);
                    }}
                    label="Enter Name"
                    inputType="text"
                    inputVal={name}
                  />
                  <PrimaryButton label="Add friend" />
                </div>
              );
            default:
              return (
                <div className={`flex flex-col items-center`}>
                  <PrimaryButton
                    label="Add friend's name"
                    className={` p-5 ${mode?.length > 0 ? "hidden" : ""}`}
                    onClick={() => {
                      setMode("name");
                    }}
                  />
                  <div className={`my-6`}>Or</div>
                  <PrimaryButton
                    label="Add friend using Email"
                    className={` p-5 `}
                    onClick={() => {
                      setMode("email");
                    }}
                  />
                </div>
              );
          }
        })(mode)}
      </div>
    </Modal>
  );
};

export default AddFriendModalComponent;
