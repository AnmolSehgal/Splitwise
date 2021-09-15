interface ButtonLoaderComponentProps {
  disabled: boolean;
  btnLabel: string;
  className?: string;
  handleOnClick: () => void;
}

const ButtonLoaderComponent = ({
  disabled,
  btnLabel,
  handleOnClick,
  className,
}: ButtonLoaderComponentProps) => {
  return (
    <div
      className={`flex items-center justify-center border ${
        disabled
          ? "border-froly-400 bg-froly-400 text-white"
          : "border-froly bg-white text-froly"
      } rounded-xl px-2 py-1 font-mono hover:${
        disabled ? "" : "bg-froly "
      } hover:${disabled ? "" : "text-white "} ${className}`}
    >
      <button className="" disabled={disabled} onClick={handleOnClick}>
        {disabled ? (
          <div className="flex flex-row items-center">
            <div
              className={` animate-spin w-4 h-4 bg-white border-t-2 border-froly-600 rounded-full`}
            ></div>
            <div className="ml-2">Loading</div>
          </div>
        ) : (
          btnLabel
        )}
      </button>
    </div>
  );
};

export default ButtonLoaderComponent;
