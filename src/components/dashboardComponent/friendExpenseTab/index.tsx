import PrimaryButton from "../../navbarComponent/PrimaryButtonComponent";

interface FriendExpenseTabProps {
  relationId: string;
  userName: string;
}

const FriendExpenseTab = ({ relationId, userName }: FriendExpenseTabProps) => {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-row w-full justify-between items-center px-3">
        <div className=" text-gray-700">{userName}</div>
        <div>
          <PrimaryButton label="expense" onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default FriendExpenseTab;
