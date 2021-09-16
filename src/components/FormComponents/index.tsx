import InputComponent from "../InputComponent";
import { formType, regExp } from "../../utils/constants/appConstant";
import signin from "../../icons/auth/signin.svg";
import signup from "../../icons/auth/signup.svg";
import ButtonLoaderComponent from "../ButtonLoaderComponent";
import { InputComponentProps } from "../../utils/types/types";
import ErrorComponent from "./ErrorComponent";
import { useMemo } from "react";

const FormComponent = ({
  type,
  nameTouched,
  emailTouched,
  passwordTouched,
  confirmPasswordTouched,
  dirtyName,
  dirtyEmail,
  dirtyPassword,
  dirtyConfirmPassword,
  changeEmail,
  changeConfirmPassword,
  changePassword,
  changeName,
  name,
  email,
  password,
  confirmPassword,
  onClick,
  disabled,
}: InputComponentProps) => {
  const btnDisabled = useMemo(() => {
    if (email.match(regExp)) {
      if (type === formType.signUp)
        if (password.length >= 8 && name && password === confirmPassword)
          return false;
        else return true;
      else return false;
    }
    return true;
  }, [confirmPassword, email, name, password, type]);

  return (
    <div className="flex flex-row justify-center items-center my-6 ">
      <div className="flex flex-row w-2/3 justify-center">
        <div className=" md:flex md:w-2/3 md:justify-center md:items-center hidden p-3">
          <img
            src={type === formType.signIn ? signin : signup}
            alt="Sign in"
            className="h-96 m-2"
          />
        </div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
          className="flex flex-col py-3 px-5 w-11/12 md:w-96 border rounded-xl shadow-md bg-white"
        >
          <div className="flex flex-row justify-center text-3xl mb-3 border-b py-1 w-full min-h-16">
            <span className="text-gray-700">
              {type === formType.signIn ? "Sign In" : "Sign Up"}
            </span>
          </div>
          {type === formType.signUp && changeName ? (
            <div>
              <InputComponent
                label="Full Name"
                onChange={changeName}
                inputVal={name as string}
                onBlur={dirtyName}
              />
              {nameTouched && name?.length === 0 ? (
                <ErrorComponent message="Enter a valid Name." />
              ) : null}
            </div>
          ) : (
            ""
          )}
          <InputComponent
            label="Email"
            onChange={changeEmail}
            onBlur={dirtyEmail}
            inputVal={email}
          />
          {emailTouched && !email.match(regExp) ? (
            <ErrorComponent message="Enter a valid email." />
          ) : null}
          <InputComponent
            label="Password"
            inputType="password"
            onChange={changePassword}
            onBlur={dirtyPassword}
            inputVal={password}
          />
          {type !== formType.signIn &&
          passwordTouched &&
          password.length < 8 ? (
            <ErrorComponent message="Password length must me more than 8 letters." />
          ) : null}

          {type === formType.signUp && changeConfirmPassword ? (
            <div>
              <InputComponent
                label="Confirm Password"
                inputType="password"
                onChange={changeConfirmPassword}
                onBlur={dirtyConfirmPassword}
                inputVal={confirmPassword as string}
              />
              {confirmPasswordTouched &&
              (password.length < 8 || password !== confirmPassword) ? (
                <ErrorComponent message="Password doesn't match" />
              ) : null}
            </div>
          ) : (
            ""
          )}

          <div className="flex flex-row justify-center">
            <ButtonLoaderComponent
              btnDisabled={btnDisabled}
              disabled={disabled}
              btnLabel="Submit"
              className=" m-2 text-lg px-2 my-3 w-32 h-10 "
              handleOnClick={onClick!}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormComponent;
