import ButtonComponent from "../../ButtonComponent";

interface NavbarButtonState {
  label: string;
  onClick?: () => void;
  className?: string;
}

const PrimaryButton = ({ label, onClick, className }: NavbarButtonState) => {
  return (
    <ButtonComponent
      className={
        "  text-white bg-froly rounded-md m-2 text-lg px-2 hover:bg-froly-600  " +
        (className ? className : "")
      }
      btnLabel={label}
      onClick={onClick}
    />
  );
};

export default PrimaryButton;
