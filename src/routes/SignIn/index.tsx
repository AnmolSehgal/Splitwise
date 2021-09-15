import { useState } from "react";
import { useDispatch } from "react-redux";

import FormComponent from "../../components/FormComponents";
import { formType } from "../../utils/constants/appConstant";
import { signInAuthRequest } from "../../store/actions/signInAction";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  return (
    <FormComponent
      type={formType.signIn}
      email={email}
      changeEmail={(val: string) => {
        setEmail(val);
      }}
      password={password}
      changePassword={(val: string) => {
        setPassword(val);
      }}
      onClick={() => {
        dispatch(signInAuthRequest(email, password));
      }}
    />
  );
};
export default SignIn;
