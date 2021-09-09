import { ExpenseInfo } from "../../../store/types";
import ExpenseDisplay from "../expenseDisplayComponent";

interface ExpenseDisplayListState {
  paymentDetails: ExpenseInfo[];
  friendUID: string;
  friendName: string;
  isVerified: boolean;
}

const ExpenseDisplayList = ({
  paymentDetails,
  friendName,
  friendUID,
  isVerified,
}: ExpenseDisplayListState) => {
  return (
    <div className="flex flex-col h-96 overflow-y-scroll">
      {paymentDetails.map((payment) => {
        return !payment.settleStatus ? (
          <ExpenseDisplay
            key={payment.expenseId}
            payment={payment}
            friendName={friendName}
            friendUID={friendUID}
            isVerified={isVerified}
          />
        ) : null;
      })}
    </div>
  );
};

export default ExpenseDisplayList;
