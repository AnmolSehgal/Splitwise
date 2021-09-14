import { useState } from "react";
import { useDispatch } from "react-redux";

import FormComponent from "../../components/FormComponents";

import { formType } from "../../components/type";
import { showErrorRequest } from "../../store/actions/errorsActions";
import { signUpAuthRequest } from "../../store/actions/signUpAction";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  return (
    <FormComponent
      type={formType.signUp}
      name={name}
      changeName={setName}
      email={email}
      changeEmail={setEmail}
      password={password}
      changePassword={setPassword}
      confirmPassword={confirmPassword}
      changeConfirmPassword={setConfirmPassword}
      onClick={() => {
        if (
          !email.match(
            /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
          )
        )
          dispatch(showErrorRequest("please enter a valid email "));
        else if (password.length < 6)
          dispatch(showErrorRequest("Enter a valid password."));
        else if (password !== confirmPassword)
          dispatch(showErrorRequest("Passwords do not match. "));
        else if (name.length === 0)
          dispatch(showErrorRequest("Enter a valid user."));
        else {
          dispatch(signUpAuthRequest(email, password, name));
        }
      }}
    />
  );
};
export default SignUp;
