export interface InputProps {
  inputType: string;
  label: string;
  inputVal: string;
  handleOnChange: (val: string) => void;
}

const Input = ({ inputType, inputVal, handleOnChange, label }: InputProps) => {
  return (
    <div className=" border-dashed border-b-4 py-2 px my-2">
      <input
        type={inputType}
        className="sm:text-sm lg:text-xl outline-none"
        placeholder={label}
        value={inputVal}
        onChange={(event) => {
          handleOnChange(event.target.value);
        }}
      />
    </div>
  );
};

export default Input;
