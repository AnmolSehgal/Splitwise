import { ReactNode } from "react";

export interface ModalComponentState {
  children: ReactNode;
  display: boolean;
}

const Modal = ({ children, display }: ModalComponentState) => {
  return (
    <div
      className={` absolute inset-0 bg-opacity-50 z-10 bg-gray-700 flex justify-center items-center ${
        display ? " " : " hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default Modal;
