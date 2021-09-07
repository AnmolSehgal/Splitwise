import { BsX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { hideErrorRequest } from "../../store/actions/errorsActions";
import { GlobalState } from "../../store/types";

const AlertComponent = () => {
  const { errorMessage, showError } = useSelector(
    (state: GlobalState) => state.error
  );
  const dispatch = useDispatch();
  return showError ? (
    <div className="flex justify-evenly text-xl text-white items-center absolute top-0 w-screen bg-malibu rounded-b ">
      <div>{errorMessage}</div>
      <BsX
        onClick={() => {
          dispatch(hideErrorRequest());
        }}
      />
    </div>
  ) : null;
};

export default AlertComponent;
