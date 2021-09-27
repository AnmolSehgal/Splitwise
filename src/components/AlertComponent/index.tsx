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
    <div className="flex justify-center absolute top-2 w-full">
      <div className="flex w-1/2 justify-between p-4 text-xl text-white items-center bg-malibu-600 rounded-xl">
        <div className="mr-4">{errorMessage}</div>
        <BsX
          onClick={() => {
            dispatch(hideErrorRequest());
          }}
        />
      </div>
    </div>
  ) : null;
};

export default AlertComponent;
