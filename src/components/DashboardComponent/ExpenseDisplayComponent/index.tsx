import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  settleExpenseForUnVerifiedRequest,
  settleExpenseRequest,
} from "../../../store/actions/expenseActions";
import { ExpenseInfo } from "../../../store/types";
import { months, UID } from "../../../utils/constants/appConstant";
import ButtonComponent from "../../ButtonComponent";

interface ExpenseDisplayProps {
  payment: ExpenseInfo;
  friendName: string;
  friendUID: string;
  isVerified: boolean;
  btnLabel: string;
}

const ExpenseDisplay = ({
  payment,
  friendName,
  friendUID,
  isVerified,
  btnLabel,
}: ExpenseDisplayProps) => {
  const userId = localStorage.getItem(UID);
  const {
    title,
    description,
    totalAmount,
    friendAmount,
    payerUID,
    expenseId,
    date,
  } = payment;
  const [showDescription, setShowDescription] = useState(false);
  const dispatch = useDispatch();
  const expenseDate = new Date(date as number);

  return (
    <div className=" flex flex-col border shadow-md rounded-xl bg-froly-400 text-gray-50 mx-2 my-3 px-3 font-mono ">
      <div className="flex flex-row items-center py-2 justify-between ">
        <div className="flex flex-col mr-2 items-center">
          <div className="text-lg">
            {months[expenseDate.getMonth()] + " " + expenseDate.getUTCDate()}
          </div>
          <div className="text-sm">{expenseDate.getFullYear()}</div>
        </div>
        <div className="flex flex-col mr-2">
          <div className="text-lg mr-2">{title}</div>
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
        <div className="mx-2">Total amount: Rs {totalAmount}</div>
        <div className="mx-2">
          {userId === payerUID
            ? `${friendName} owes you : Rs `
            : `you owes ${friendName} : Rs `}
          {friendAmount}
        </div>
        <div>
          <ButtonComponent
            btnLabel={btnLabel}
            className=" bg-froly-400 border border-gray-50 p-1 rounded-lg  hover:bg-gray-50 hover:border-froly-400 hover:text-froly-400"
            onClick={() => {
              console.log(isVerified + "---- verified user");
              isVerified
                ? dispatch(
                    settleExpenseRequest(expenseId, userId as string, friendUID)
                  )
                : dispatch(
                    settleExpenseForUnVerifiedRequest(
                      expenseId,
                      userId as string,
                      friendUID
                    )
                  );
            }}
          />
        </div>
      </div>
      {description && showDescription ? (
        <div className="text-sm mt-3 mb-2">Description : {description}</div>
      ) : null}
    </div>
  );
};

export default ExpenseDisplay;
