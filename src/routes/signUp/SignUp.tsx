import { useState } from "react";
import { useDispatch } from "react-redux";

import FormComponent from "../../components/formComponents/FormComponent";
import { formType } from "../../components/type";
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
          email.length > 0 &&
          password.length > 0 &&
          password === confirmPassword &&
          name.length > 0
        ) {
          dispatch(signUpAuthRequest(email, password, name));
        }
      }}
    />
  );
};
export default SignUp;
