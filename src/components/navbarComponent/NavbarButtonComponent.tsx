import ButtonComponent from "../buttonComponent/ButtonComponent";

interface NavbarButtonState {
  label: string;
  onClick?: () => void;
}

const NavbarButton = ({ label, onClick }: NavbarButtonState) => {
  return (
    <ButtonComponent
      className=" border text-froly border-froly rounded-lg m-2 text-lg px-2 hover:bg-froly hover:text-white"
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

export default NavbarButton;
