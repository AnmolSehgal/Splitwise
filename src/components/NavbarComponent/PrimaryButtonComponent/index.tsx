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
        " border text-froly border-froly rounded-lg m-2 text-lg px-2 hover:bg-froly hover:text-white " +
        (className ? className : "")
      }
      btnLabel={label}
      onClick={
        onClick
          ? () => {
              onClick();
            }
          : () => {}
      }
    />
  );
};

export default PrimaryButton;
