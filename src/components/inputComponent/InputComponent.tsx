interface InputComponentProps {
  label?: string;
  inputType?: string;
  className?: string;
  inputVal: string;
  onChange: (val: string) => void | ((val: number) => void);
}

const InputComponent = ({
  label,
  inputType,
  inputVal,
  className,
  onChange,
}: InputComponentProps) => {
  return (
    <div className={`flex flex-col min-h-24 ${className ? className : ""}`}>
      {label ? <label className="text-gray-700 ">{label}</label> : ""}
      <div className="w-full rounded border px-2 py-1 shadow-sm bg-white">
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
