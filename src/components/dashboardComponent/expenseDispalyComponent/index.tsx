import { useState } from "react";
import { ExpenseInfo } from "../../../store/types";

interface ExpenseDisplayProps {
  expenseInfo: ExpenseInfo;
  friendName: string;
}

const ExpenseDisplay = ({ expenseInfo, friendName }: ExpenseDisplayProps) => {
  const {
    title,
    description,
    payerId,
    payerAmount,
    totalAmount,
    friendAmount,
    modifiedDate,
  } = expenseInfo;
  const [showDescription, setShowDescription] = useState(false);
  return (
    <div className="">
      <div className="flex flex-row bg-malibu-400 border-b text-gray-700 items-center py-2">
        <div className="">{modifiedDate}</div>
        <div className="flex flex-col">
          <div className="text-lg">{title}</div>
          {description ? (
            <div
              className="text-sm"
              onClick={() => {
                setShowDescription(!showDescription);
              }}
            >
              {showDescription ? "Hide description" : "Show description"}
            </div>
          ) : null}
        </div>
        <div className=" mx-0.5">Total amount: Rs {totalAmount}</div>
        <div>
          {localStorage.get("uid") === payerId
            ? `${friendName} owes you : Rs ${friendAmount}`
            : `you owes ${friendName} : Rs ${payerAmount}`}
        </div>
      </div>
      {description && showDescription ? (
        <div className="text-sm">{description}</div>
      ) : null}
    </div>
  );
};

export default ExpenseDisplay;
