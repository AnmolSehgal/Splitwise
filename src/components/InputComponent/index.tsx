interface InputComponentProps {
  label?: string;
  inputType?: string;
  className?: string;
  inputVal: string;
  onChange: (val: string) => void | ((val: number) => void);
  onBlur?: () => void;
}

const InputComponent = ({
  label,
  inputType,
  inputVal,
  className,
  onChange,
  onBlur,
}: InputComponentProps) => {
  return (
    <div className={`flex flex-col min-h-20 ${className ? className : ""}`}>
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
          onBlur={onBlur}
        />
      </div>
    </div>
  );
};

export default InputComponent;
