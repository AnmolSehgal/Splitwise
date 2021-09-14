import { MdEdit } from "react-icons/md";

interface DisplayComponentProps {
  val: string;
  handleOnChange: () => void;
  type?: string;
}

const DisplayComponent = ({
  val,
  handleOnChange,
  type,
}: DisplayComponentProps) => {
  return (
    <div className="flex flex-row">
      {val !== null && val.length > 0 ? val : "None"}
      {type !== "Email" && type !== "Phone Number" ? (
        <span
          className="flex flex-row ml-4 text-blue-400 justify-center items-center "
          onClick={() => {
            handleOnChange();
          }}
        >
          Edit <MdEdit className="ml-2" />
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default DisplayComponent;
