import { useState } from "react";
import { BsX, BsArrowLeftShort } from "react-icons/bs";
import Modal from "../Modal";
import Modes from "./Modes";

export interface AddFriendProps {
  display: boolean;
  handleDisplay: () => void;
}

const AddFriendModalComponent = ({
  display,
  handleDisplay,
}: AddFriendProps) => {
  const [mode, setMode] = useState("");

  return (
    <Modal display={display}>
      <div className="flex flex-col opacity-100 bg-white w-80 border rounded-xl text-gray-700 p-5">
        <div
          className={`flex flex-row w-full text-2xl ${
            mode?.length > 0 ? "justify-between" : " justify-end"
          }`}
        >
          {mode?.length > 0 ? (
            <BsArrowLeftShort
              onClick={() => {
                setMode("");
              }}
            />
          ) : (
            ""
          )}
          <BsX onClick={handleDisplay} />
        </div>
        <Modes
          handleModes={(mode: string) => {
            setMode(mode);
          }}
          mode={mode}
        />
      </div>
    </Modal>
  );
};

export default AddFriendModalComponent;
