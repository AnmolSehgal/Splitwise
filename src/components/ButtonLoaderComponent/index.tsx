interface ButtonLoaderComponentProps {
  btnDisabled?: boolean;
  disabled: boolean;
  btnLabel: string;
  className?: string;
  handleOnClick: () => void;
}

const ButtonLoaderComponent = ({
  btnDisabled,
  disabled,
  btnLabel,
  handleOnClick,
  className,
}: ButtonLoaderComponentProps) => {
  return (
    <div
      className={`flex items-center justify-center border ${
        disabled || btnDisabled
          ? " bg-froly-400 text-white"
          : " bg-froly-500 text-white hover:bg-froly-600"
      } rounded-lg  px-2 py-1 font-mono
      ${className}`}
    >
      <button
        className=""
        disabled={disabled || btnDisabled}
        onClick={handleOnClick}
      >
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
