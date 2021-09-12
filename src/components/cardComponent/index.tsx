import React from "react";
import invoice from "../../icons/invoice/invoice.png";
import AmountDisplayComponent from "./amountDisplayComponent";

interface CardComponentProps {
  owed: number;
  owe: number;
  friendName?: string;
  childern?: React.ReactNode;
}

export const CardComponent = ({ owed, owe }: CardComponentProps) => {
  return (
    <div className=" shadow-xl border border-gray rounded-xl bg-froly min-w-max min-h-40 p-5 text-white font-mono">
      <div className="flex flex-row justify-between items-center ">
        <img src={invoice} alt="invoice" className="w-24 h-24" />

        <div className="flex flex-col ml-4 md:ml-5 text-md">
          <span className="py-2">{localStorage.getItem("userName")}</span>
          <span>total balance : Rs. {owed - owe}</span>
        </div>
      </div>

      <div className="flex flex-row justify-between mt-2 items-center border-t border-white py-1">
        <div className="flex flex-col  border-white">
          <div>
            <AmountDisplayComponent owed amount={owed} />
          </div>
        </div>

        <div>
          <AmountDisplayComponent owed={false} amount={owe} />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
