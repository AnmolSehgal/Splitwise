import { useSelector } from "react-redux";
import { GlobalState } from "../../../../store/types";
import ExpenseTypeComponent from "../expenseTypeComponent";

interface CurrentExpenseListProps {
  listName: string;
  message: string;
  handleCheck: (amount: number) => boolean;
  className: string;
}

const CurrentExpenseList = ({
  listName,
  handleCheck,
  message,
  className,
}: CurrentExpenseListProps) => {
  const friends = useSelector((state: GlobalState) => state.friends.friends);
  let count = 0;
  friends.forEach((data) => {
    let amt = 0;
    data.paymentDetails.forEach((val) => {
      if (!val.settleStatus) {
        amt +=
          (localStorage.getItem("uid") === val.payerUID ? 1 : -1) *
          val.friendAmount;
      }
    });
    if (handleCheck(amt)) {
      count++;
    }
  });
  return (
    <div className="flex flex-col w-full font-mono">
      <div className="flex w-full justify-self-start text-gray-700">
        {listName}
      </div>
      {count === 0 ? (
        <div className="text-gray-700 font-bold">{message}</div>
      ) : (
        <div className="flex flex-col w-full items-center overflow-y-scroll">
          {friends.map((friend) => {
            return (
              <ExpenseTypeComponent
                key={friend.friendUID}
                className={className}
                friend={friend}
                handleCheck={handleCheck}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CurrentExpenseList;
