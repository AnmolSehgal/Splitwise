import Modal from "../../ModalComponent";
import AddExpenseContent from "./AddExpenseContent";

export interface AddExpenseModalState {
  display: boolean;
  handleDisplay: () => void;
  friendUID: string;
  friendName: string;
  isVerified: boolean;
  handleLoader: () => void;
}

const AddExpenseModal = ({
  display,
  handleDisplay,
  handleLoader,
  friendName,
  friendUID,
  isVerified,
}: AddExpenseModalState) => {
  return (
    <Modal display={display}>
      <AddExpenseContent
        handleDisplay={handleDisplay}
        friendName={friendName}
        friendUID={friendUID}
        isVerified={isVerified}
        handleLoader={handleLoader}
      />
    </Modal>
  );
};

export default AddExpenseModal;
