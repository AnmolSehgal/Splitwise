import { useState } from "react";
import { Friend } from "../../../store/types";
import PrimaryButton from "../../navbarComponent/PrimaryButtonComponent";
import AddExpenseModal from "../addExpenseModal";

const FriendExpenseTab = ({ friendUID, userName, isVerified }: Friend) => {
  const [display, setDisplay] = useState(false);
  return (
    <div className="flex flex-col px-2">
      <div className="flex flex-row w-full justify-between items-center px-2 border-b">
        <div className=" text-gray-700 text-xl">{userName}</div>
        <div className="flex flex-row">
          <PrimaryButton
            label="Add expense"
            onClick={() => {
              setDisplay(true);
            }}
          />
          <PrimaryButton label="Settle all" onClick={() => {}} />
        </div>
      </div>
      <AddExpenseModal
        display={display}
        friendUID={friendUID}
        friendName={userName}
        isVerified={isVerified}
        handleDisplay={() => {
          setDisplay(false);
        }}
      />
    </div>
  );
};

export default FriendExpenseTab;
