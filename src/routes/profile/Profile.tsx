import { useState } from "react";
import { BsX, BsCheck } from "react-icons/bs";

import InputComponent from "../../components/inputComponent/InputComponent";
import ProfileEditComponent from "../../components/profileComponents/ProfileEditComponent";
import DisplayComponent from "../../components/profileComponents/DisplayComponent";
import ButtonComponent from "../../components/buttonComponent/ButtonComponent";
import { GlobalState, ProfileObject } from "../../store/types";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfoRequest } from "../../store/actions/profileActions";
import { useEffect } from "react";

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

  console.log(name);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col p-2 border rounded-lg w-1/2 shadow-md">
        <div className="text-3xl mb-4 py-1 border-b">Profile</div>
        <div className="flex flex-row justify-evenly">
          <div className="flex flex-col mr-6">
            <img
              src={userImage}
              alt="profile"
              className="h-28 w-28 border mb-5 rounded-xl"
            />
            <input
              type="file"
              className=" h-7.5 text-md bg-secondary-500 border rounded-"
              onChange={(event) => {
                if (event.target.files) setImage(event.target.files[0]);
              }}
            />
          </div>
          <div>
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
            <ButtonComponent
              btnLabel="Save"
              className="w-24 h-12 text-white bg-froly border rounded-lg"
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
