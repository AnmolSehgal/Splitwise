import { useDispatch } from "react-redux";
import { checkUserRequest } from "../../store/actions/expenseActions";
import ButtonComponent from "../buttonComponent/ButtonComponent";

const CheckButton = () => {
  const dispatch = useDispatch();
  return (
    <ButtonComponent
      btnLabel="check"
      className="border-b border-gray-500 text-gray-500"
      onClick={() => {
        dispatch(checkUserRequest);
      }}
    />
  );
};

export default CheckButton;
