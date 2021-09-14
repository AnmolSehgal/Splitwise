import InputComponent from "../../../InputComponent";
import PrimaryButton from "../../../NavbarComponent/primaryButtonComponent";

interface FriendInputProps {
  inputLabel: string;
  inputType: string;
  inputVal: string;
  btnLabel: string;
  handleOnChange: (val: string) => void;
  handleOnClick: () => void;
}

const FriendInputComponent = ({
  inputLabel,
  inputType,
  inputVal,
  btnLabel,
  handleOnChange,
  handleOnClick,
}: FriendInputProps) => {
  return (
    <div className="mt-4">
      {" "}
      <InputComponent
        onChange={handleOnChange}
        label={inputLabel}
        inputType={inputType}
        inputVal={inputVal}
      />
      <PrimaryButton
        label={btnLabel}
        onClick={() => {
          if (inputType) handleOnClick();
        }}
      />
    </div>
  );
};

export default FriendInputComponent;
