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
      className={`border ${
        disabled
          ? "border-froly-400 bg-froly-400 text-white"
          : "border-froly bg-white text-froly"
      } rounded-xl p-2 font-mono hover:${disabled ? "" : "bg-froly "} hover:${
        disabled ? "" : "text-white "
      } ${className}`}
    >
      <button className="" disabled={disabled} onClick={handleOnClick}>
        {disabled ? (
          <div>
            <div
              className={` animate-spin w-12 h-12 bg-white border-t-2 border-froly rounded-full`}
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
