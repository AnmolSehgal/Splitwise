import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormComponent from "../../components/FormComponents";
import { formType } from "../../utils/constants/appConstant";
import { signInAuthRequest } from "../../store/actions/signInAction";
import { GlobalState } from "../../store/types";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loadSignIn = useSelector((state: GlobalState) => state.signIn.loading);

  return (
    <FormComponent
      disabled={loadSignIn}
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
