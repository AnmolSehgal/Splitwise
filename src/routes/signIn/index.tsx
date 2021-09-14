import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormComponent from "../../components/formComponents";
import LoaderComponent from "../../components/LoaderComponent";
import { formType } from "../../components/type";
import { signInAuthRequest } from "../../store/actions/signInAction";
import { GlobalState } from "../../store/types";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loading } = useSelector((state: GlobalState) => state.signIn);
  const dispatch = useDispatch();

  return loading ? (
    <LoaderComponent />
  ) : (
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
