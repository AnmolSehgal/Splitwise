import { Friend } from "../../../store/types";
import PrimaryButton from "../../navbarComponent/PrimaryButtonComponent";

const FriendExpenseTab = ({ friendUID, userName }: Friend) => {
  return (
    <div className="flex flex-col px-2">
      <div className="flex flex-row w-full justify-between items-center px-2 border-b">
        <div className=" text-gray-700 text-xl">{userName}</div>
        <div className="flex flex-row">
          <PrimaryButton label="Add expense" onClick={() => {}} />
          <PrimaryButton label="Settle all" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default FriendExpenseTab;
