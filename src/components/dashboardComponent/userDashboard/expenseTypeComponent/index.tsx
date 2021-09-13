import { Link } from "react-router-dom";
import { Friend } from "../../../../store/types";

interface ExpenseTypeComponentProps {
  friend: Friend;
  handleCheck: (amount: number) => boolean;
  className: string;
}
const ExpenseTypeComponent = ({
  friend,
  handleCheck,
  className,
}: ExpenseTypeComponentProps) => {
  let amount = 0;
  friend.paymentDetails.forEach((data) => {
    if (!data.settleStatus) {
      amount +=
        data.payerUID === localStorage.getItem("uid")
          ? data.friendAmount
          : -1 * data.friendAmount;
    }
  });

  return handleCheck(amount) ? (
    <Link
      to={`friend/${friend.friendUID}`}
      className={` flex flex-row w-44 md:w-3/4 justify-between items-center rounded-xl p-2 ${className} text-white my-1`}
    >
      <div className="text-lg mr-3">{friend.userName}</div>
      <div>Rs. {amount > 0 ? amount : -1 * amount}</div>
    </Link>
  ) : null;
};

export default ExpenseTypeComponent;
