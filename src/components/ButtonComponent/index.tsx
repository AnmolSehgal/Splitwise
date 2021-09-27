interface BtnProps {
  btnLabel: string;
  className: string;
  onClick?: () => void;
}

const ButtonComponent = ({
  btnLabel,
  className,
  onClick = () => {},
}: BtnProps) => {
  return (
    <div>
      <button className={className} onClick={onClick}>
        {btnLabel}
      </button>
    </div>
  );
};

export default ButtonComponent;
