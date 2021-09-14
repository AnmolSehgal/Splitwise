import { ExpenseInfo } from "../../../store/types";
import ExpenseDisplay from "../ExpenseDisplayComponent";

interface ExpenseDisplayListState {
  paymentDetails: ExpenseInfo[];
  friendUID: string;
  friendName: string;
  isVerified: boolean;
  settle: boolean;
}

const ExpenseDisplayList = ({
  paymentDetails,
  friendName,
  friendUID,
  isVerified,
  settle,
}: ExpenseDisplayListState) => {
  let count = 0;
  paymentDetails.forEach((data) => {
    if (data.settleStatus === settle) count++;
  });

  return (
    <div className="flex flex-col h-96 overflow-y-scroll">
      <div className="border-b  text-gray-700 text-lg">Details</div>
      {count === 0 ? (
        <div className="flex flex-row justify-center text-gray-700 text-lg py-3">
          There is nothing to {settle ? "unsettle" : "settle"}
        </div>
      ) : (
        paymentDetails.map((payment) => {
          return payment.settleStatus === settle ? (
            <ExpenseDisplay
              btnLabel={settle ? "unsettle" : "settle"}
              key={payment.expenseId}
              payment={payment}
              friendName={friendName}
              friendUID={friendUID}
              isVerified={isVerified}
            />
          ) : null;
        })
      )}
    </div>
  );
};

export default ExpenseDisplayList;
