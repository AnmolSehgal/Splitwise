import { useState } from "react";
import DisplayComponent from "./DisplayComponent";

interface ProfileEditComponentProps {
  label: string;
  val: string;
  onChange: (val: string) => void;
}

const ProfileEditComponent = ({
  label,
  val,
  onChange,
}: ProfileEditComponentProps) => {
  const [changeVal, setChangeVal] = useState(false);
  return (
    <div className="mb-3">
      <div className="font-bold">{label}</div>

      {changeVal ? (
        <div className=" border rounded  py-1">
          <input
            placeholder={label}
            className="w-auto outline-none mx-1 "
            onChange={(event) => {
              onChange(event.target.value);
            }}
            onKeyDown={(event) => {
              if (event.key === "Enter") setChangeVal(false);
            }}
          />
        </div>
      ) : (
        <DisplayComponent
          val={val}
          type={label}
          handleOnChange={() => {
            setChangeVal(true);
          }}
        />
      )}
    </div>
  );
};

export default ProfileEditComponent;
