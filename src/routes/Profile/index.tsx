import { useState } from "react";
import { BsX, BsCheck } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import InputComponent from "../../components/InputComponent";
import ProfileEditComponent from "../../components/ProfileComponents/ProfileEditComponent";
import DisplayComponent from "../../components/ProfileComponents/DisplayComponent";
import PrimaryButton from "../../components/NavbarComponent/primaryButtonComponent";

import { GlobalState, ProfileObject } from "../../store/types";

import { updateUserInfoRequest } from "../../store/actions/profileActions";

const Profile = () => {
  const {
    name: userName,
    email: userEmail,
    phoneNumber,
    image: userImage,
  } = useSelector((state: GlobalState) => state.profile);

  const dispatch = useDispatch();

  useEffect(() => {
    setName(userName);
    setEmail(userEmail);
    setPhoneNum(phoneNumber);
  }, [userName, userEmail, phoneNumber, userImage]);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phoneNum, setPhoneNum] = useState<string>("");
  const [image, setImage] = useState<File>();
  const [changePassword, setChangePassword] = useState(false);
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col p-2 border rounded-lg w-11/12 md:w-1/2 shadow-md">
        <div className="text-3xl mb-4 py-1 border-b">Profile</div>
        <div className="flex flex-row justify-evenly flex-wrap">
          <div className="flex flex-col items-center mr-6">
            <img
              src={userImage}
              alt="profile"
              className="h-36 w-36 border mb-5 rounded-xl"
            />
            <div className=" text-center px-6 py-1 border text-froly border-froly rounded-lg m-2 text-lg hover:bg-froly hover:text-white">
              <label htmlFor="image" className="">
                Upload
              </label>
            </div>

            <input
              hidden
              id="image"
              type="file"
              onChange={(event) => {
                if (event.target.files) setImage(event.target.files[0]);
              }}
            />
          </div>
          <div className="flex flex-col items-start">
            <ProfileEditComponent label="Name" val={name} onChange={setName} />
            <ProfileEditComponent
              label="Email"
              val={email}
              onChange={setEmail}
            />
            <ProfileEditComponent
              label="Phone Number"
              val={phoneNum}
              onChange={setPhoneNum}
            />
            {changePassword ? (
              <div className="flex flex-col">
                <div className="flex flex-row justify-between items-center">
                  <div className="font-bold">Password</div>{" "}
                  <span className="flex flex-row justify-end">
                    {" "}
                    <BsCheck
                      onClick={() => {
                        setChangePassword(false);
                      }}
                      className="text-blue-400 text-2xl"
                    />{" "}
                    <BsX
                      onClick={() => {
                        setChangePassword(false);
                        setPrevPassword("");
                        setNewPassword("");
                      }}
                      className="text-blue-400 text-2xl"
                    />
                  </span>
                </div>
                <InputComponent
                  inputType="password"
                  label="Old Password"
                  inputVal={prevPassword}
                  onChange={setPrevPassword}
                />
                <InputComponent
                  inputType="password"
                  label="New Password"
                  inputVal={newPassword}
                  onChange={setNewPassword}
                />
              </div>
            ) : (
              <div>
                <div className="font-bold">Password</div>
                <DisplayComponent
                  val={"**********"}
                  handleOnChange={() => {
                    setChangePassword(true);
                  }}
                />
              </div>
            )}
            <PrimaryButton
              label="Save"
              className="w-24 h-12 "
              onClick={() => {
                let updateInfo: ProfileObject = {};
                if (image) updateInfo.image = image;
                if (newPassword.length > 6 && prevPassword.length > 0) {
                  updateInfo.newPassword = newPassword;
                  updateInfo.oldPassword = prevPassword;
                }
                if (name.length > 0) updateInfo.name = name;
                dispatch(updateUserInfoRequest(updateInfo));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
