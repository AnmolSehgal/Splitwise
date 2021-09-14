import { useState } from "react";
import { BsX } from "react-icons/bs";
import { useDispatch } from "react-redux";
import bill from "../../../../icons/bill/bill.svg";

import {
  addExpenseForUnVerifiedRequest,
  addExpenseRequest,
} from "../../../../store/actions/expenseActions";
import { UID, USERNAME } from "../../../../utils/appConstant";
import ButtonComponent from "../../../buttonComponent";
import Input from "../../input";
export interface AddExpenseContentState {
  handleDisplay: () => void;
  friendUID: string;
  isVerified: boolean;
  friendName: string;
}

const AddExpenseContent = ({
  handleDisplay,
  friendUID,
  isVerified,
  friendName,
}: AddExpenseContentState) => {
  const userID = localStorage.getItem(UID);
  const userName = localStorage.getItem(USERNAME);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paidBy, setPaidBy] = useState(userID);
  const [payer, setPayer] = useState(false);
  const [splitMode, setSplitMode] = useState("equality");
  const [payerFraction, setPayerFraction] = useState("0");
  const [friendFraction, setFriendFraction] = useState("100");
  const dispatch = useDispatch();

  const clearState = () => {
    setTitle("");
    setDescription("");
    setAmount("");
    setPaidBy(userID);
    setPayer(false);
    setSplitMode("equality");
    setPayerFraction("");
    setFriendFraction("");
  };
  return (
    <div className="flex flex-col w-1/2 border border-gray-400 rounded-xl bg-white  font-mono">
      <div className="flex flex-row justify-between items-center bg-froly rounded-t-xl py-2 px-2">
        <div className="text-xl text-white">Add expense</div>
        <BsX onClick={handleDisplay} size="25px" className="text-white" />
      </div>
      <div className="flex flex-row justify-center item-center bg-gray-100 border-b ">
        <div>with you and {friendName}</div>
      </div>
      <div className="flex flex-row px-3 w-full py-2">
        <div className="  hidden lg:flex justify-center items-center w-1/2 p-10">
          <div className="">
            <img src={bill} alt="bill" />
          </div>
        </div>
        <div className="flex flex-col w-full lg:w-1/2">
          <Input
            label="Enter Title"
            inputVal={title}
            inputType="text"
            handleOnChange={(val) => {
              setTitle(val);
            }}
          />
          <Input
            label="Enter Description"
            inputVal={description}
            inputType="text"
            handleOnChange={(val) => {
              setDescription(val);
            }}
          />
          <Input
            label="Enter Amount"
            inputVal={amount}
            inputType="number"
            handleOnChange={(val) => {
              if (val === null || parseInt(val) >= 0) setAmount(val);
            }}
          />
        </div>
      </div>
      <div className="flex flex-row py-2 justify-center text-lg">
        <div className="pr-3">Paid by </div>
        <div className="flex flex-col">
          <div
            onClick={() => {
              setPayer(!payer);
            }}
          >
            {paidBy === userID ? userName : friendName}
          </div>
          {payer ? (
            <div className=" flex flex-col  border shadow-md p-2">
              <div
                onClick={() => {
                  setPaidBy(userID);
                  setPayer(false);
                }}
              >
                {userName}
              </div>
              <div
                onClick={() => {
                  setPaidBy(friendUID);
                  setPayer(false);
                }}
              >
                {friendName}
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex flex-col py-2">
        <div className="flex flex-row justify-evenly items-center">
          <div>Split Expense :</div>
          <div
            className="p-2 border-dashed border-2"
            onClick={() => {
              setSplitMode("equality");
            }}
          >
            Equality
          </div>
          <div
            className="p-2 border-dashed border-2"
            onClick={() => {
              setSplitMode("percentage");
            }}
          >
            percentage (%)
          </div>
        </div>
        {splitMode !== "equality" ? (
          <div className="flex flex-col items-center mt-2">
            <div className=" w-72 p-3 border shadow-lg rounded-xl">
              <Input
                label="Enter payer %"
                inputType="number"
                inputVal={payerFraction}
                handleOnChange={(val) => {
                  const value = parseInt(val);
                  if (!val) {
                    setPayerFraction("0");
                    setFriendFraction("100");
                  } else if (value >= 0 && value <= 100) {
                    setPayerFraction(value.toString());
                    setFriendFraction((100 - value).toString());
                  }
                }}
              />
              <Input
                label="Enter Friend %"
                inputType="number"
                inputVal={friendFraction}
                handleOnChange={(val) => {
                  const value = parseInt(val);
                  if (!val) {
                    setPayerFraction("0");
                    setFriendFraction("100");
                  } else if (value >= 0 && value <= 100) {
                    setFriendFraction(value.toString());
                    setPayerFraction((100 - value).toString());
                  }
                }}
              />
            </div>
          </div>
        ) : null}
      </div>
      <div className="flex flex-row py-2 justify-end items-center px-2">
        <div className="flex flex-row">
          <ButtonComponent
            btnLabel="Cancel"
            className=" text-froly border-froly hover:bg-froly hover:text-white py-2 px-3 mr-3 rounded-xl"
            onClick={() => {
              handleDisplay();
              clearState();
            }}
          />
          <ButtonComponent
            btnLabel="Save"
            className=" border border-froly py-2 px-3 rounded-xl text-froly hover:bg-froly hover:text-white "
            onClick={() => {
              handleDisplay();
              const totalAmount = parseInt(amount);
              if (totalAmount > 0) {
                let payerAmountNum, friendAmountNum;
                if (splitMode === "equality") {
                  payerAmountNum = totalAmount / 2;
                  friendAmountNum = totalAmount / 2;
                } else {
                  payerAmountNum =
                    (totalAmount * parseInt(payerFraction)) / 100;
                  friendAmountNum =
                    (totalAmount * parseInt(friendFraction)) / 100;
                }
                if (isVerified)
                  dispatch(
                    addExpenseRequest(
                      {
                        payerAmount: payerAmountNum,
                        friendAmount: friendAmountNum,
                        payerUID: paidBy as string,
                        title: title,
                        description: description,
                        totalAmount: totalAmount,
                      },
                      userID as string,
                      friendUID
                    )
                  );
                else
                  dispatch(
                    addExpenseForUnVerifiedRequest(
                      {
                        payerAmount: payerAmountNum,
                        friendAmount: friendAmountNum,
                        payerUID: paidBy as string,
                        title: title,
                        description: description,
                        totalAmount: totalAmount,
                      },
                      userID as string,
                      friendUID
                    )
                  );
              }
              clearState();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AddExpenseContent;
