import { useState } from "react";

export interface ExpenseDisplayProps {
  settleStatus: boolean;
  expenseId: string;
  relationId: string;
  title: string;
  friend: string;

  friendEmail?: string;
  paidBy: string;
  description: string;
  payerAmount: number;
  totalAmount: number;
  friendAmount: number;
  modifiedDate: string;
}

const ExpenseDisplay = ({
  settleStatus,
  expenseId,
  relationId,
  title,
  friend,
  paidBy,
  description,
  payerAmount,
  totalAmount,
  friendAmount,
  modifiedDate,
}: ExpenseDisplayProps) => {
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
        <div>{localStorage.get}</div>
      </div>
      {description && showDescription ? (
        <div className="text-sm">{description}</div>
      ) : null}
    </div>
  );
};

export default ExpenseDisplay;
