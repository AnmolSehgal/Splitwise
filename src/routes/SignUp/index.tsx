import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormComponent from "../../components/FormComponents";

import { formType, regExp } from "../../utils/constants/appConstant";
import { signUpAuthRequest } from "../../store/actions/signUpAction";
import { GlobalState } from "../../store/types";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);

  const loadSignUp = useSelector((state: GlobalState) => state.signUp.isLoader);

  const dispatch = useDispatch();

  return (
    <FormComponent
      nameTouched={nameTouched}
      dirtyName={() => {
        setNameTouched(true);
      }}
      emailTouched={emailTouched}
      dirtyEmail={() => {
        setEmailTouched(true);
      }}
      passwordTouched={passwordTouched}
      dirtyPassword={() => {
        setPasswordTouched(true);
      }}
      confirmPasswordTouched={confirmPasswordTouched}
      dirtyConfirmPassword={() => {
        setConfirmPasswordTouched(true);
      }}
      disabled={loadSignUp}
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
          email.match(regExp) &&
          password.length >= 8 &&
          password === confirmPassword &&
          name.length !== 0
        )
          dispatch(signUpAuthRequest(email, password, name));
      }}
    />
  );
};
export default SignUp;
