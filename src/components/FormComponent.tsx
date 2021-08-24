import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";
import { formType } from "./type";

interface InputComponentProps {
  type: string;
  name?: string;
  changeName?: (val: string) => void;
  email: string;
  changeEmail: (val: string) => void;
  password: string;
  changePassword: (val: string) => void;
  confirmPassword?: string;
  changeConfirmPassword?: (val: string) => void;
  onClick?: () => void;
}

const FormComponent = ({
  type,
  changeEmail,
  changeConfirmPassword,
  changePassword,
  changeName,
  name,
  email,
  password,
  confirmPassword,
  onClick,
}: InputComponentProps) => {
  return (
    <div className="flex flex-col justify-center items-center my-6">
      <div className="flex flex-col p-3 w-2/5  border rounded">
        <div className="text-3xl mb-3 border-b py-1">
          {type === formType.signIn ? "SignIn" : "Sign Up"}
        </div>
        {type === formType.signUp && changeName ? (
          <InputComponent
            label="Full Name"
            onChange={changeName}
            inputVal={name as string}
          />
        ) : (
          ""
        )}
        <InputComponent label="Email" onChange={changeEmail} inputVal={email} />
        <InputComponent
          label="Password"
          inputType="password"
          onChange={changePassword}
          inputVal={password}
        />
        {type === formType.signUp && changeConfirmPassword ? (
          <InputComponent
            label="Confirm Password"
            inputType="password"
            onChange={changeConfirmPassword}
            inputVal={confirmPassword as string}
          />
        ) : (
          ""
        )}
        <ButtonComponent
          btnLabel="Submit"
          className="bg-secondary-600 text-white my-3 w-full rounded"
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default FormComponent;
