import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  settleAllExpenseForUnVerifiedRequest,
  settleAllExpenseRequest,
} from "../../../store/actions/expenseActions";
import { Friend, GlobalState } from "../../../store/types";
import { UID } from "../../../utils/constants/appConstant";
import ButtonLoaderComponent from "../../ButtonLoaderComponent";
import CardComponent from "../../CardComponent";
import AddExpenseModal from "../AddExpenseModal";
import ExpenseDisplayList from "../ExpenseDisplayList";

const FriendExpenseTab = ({ friendUID, userName, isVerified }: Friend) => {
  const [display, setDisplay] = useState(false);
  const [settle, setSettle] = useState(false);
  const [addExpense, setAddExpense] = useState(false);
  const [settleExpense, setSettleExpense] = useState(false);

  const { friends, isLoader } = useSelector(
    (state: GlobalState) => state.friends
  );
  const dispatch = useDispatch();

  const userId = localStorage.getItem(UID);
  let owe = 0,
    owed = 0;

  useEffect(() => {
    if (!isLoader) {
      setAddExpense(false);
      setSettleExpense(false);
    }
  }, [isLoader]);

  const index = friends.findIndex((data) => {
    return data.friendUID === friendUID;
  });

  const paymentDetails = index >= 0 ? friends[index].paymentDetails : [];

  paymentDetails.forEach((data) => {
    if (!data.settleStatus) {
      if (data.payerUID === userId) owed += data.friendAmount;
      else owe += data.friendAmount;
    }
  });

  return (
    <div className="flex flex-col px-2">
      <div className="flex flex-row w-full justify-end items-center px-2 border-b">
        <div className="flex flex-row justify-end items-center pb-2">
          <ButtonLoaderComponent
            btnLabel="Add expense"
            handleOnClick={() => {
              setDisplay(true);
            }}
            disabled={addExpense}
            className="mr-2"
          />
          <ButtonLoaderComponent
            btnLabel="Settle all"
            handleOnClick={() => {
              const userUID = userId as string;
              isVerified
                ? dispatch(settleAllExpenseRequest(userUID, friendUID))
                : dispatch(
                    settleAllExpenseForUnVerifiedRequest(userUID, friendUID)
                  );
              setSettleExpense(true);
            }}
            disabled={settleExpense}
          />
        </div>
      </div>
      <div className="pt-3">
        <div className="mb-3">
          <CardComponent owe={owe} owed={owed} friendName={userName}>
            <div className="border-t border-white flex flex-row py-1">
              <div
                className="flex justify-center items-center w-1/2 border-r border-white"
                onClick={() => {
                  setSettle(false);
                }}
              >
                Settle
              </div>
              <div
                className="flex justify-center items-center w-1/2"
                onClick={() => {
                  setSettle(true);
                }}
              >
                Unsettle
              </div>
            </div>
          </CardComponent>
        </div>
        {paymentDetails.length > 0 ? (
          <div>
            <ExpenseDisplayList
              settle={settle}
              isVerified={isVerified}
              paymentDetails={paymentDetails}
              friendName={userName}
              friendUID={friendUID}
            />
          </div>
        ) : (
          <div className="flex justify-center mr-2">No expense to settle</div>
        )}
      </div>
      <AddExpenseModal
        handleLoader={() => {
          setAddExpense(true);
        }}
        display={display}
        friendUID={friendUID}
        friendName={userName}
        isVerified={isVerified}
        handleDisplay={() => {
          setDisplay(false);
        }}
      />
    </div>
  );
};

export default FriendExpenseTab;
