interface InputComponentProps {
  label?: string;
  inputType?: string;
  inputVal: string;
  onChange: (val: string) => void | ((val: number) => void);
}

const InputComponent = ({
  label,
  inputType,
  inputVal,
  onChange,
}: InputComponentProps) => {
  return (
    <div className="flex flex-col py-2">
      {label ? <label className="text-gray-500">{label}</label> : ""}
      <div className="w-full rounded border px-2 py-1 shadow-sm">
        <input
          type={inputType === "password" ? "password" : "text"}
          className="w-full outline-none "
          value={inputVal}
          placeholder={`${label}`}
          onChange={(event) => {
            onChange(event.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default InputComponent;
