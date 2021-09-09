import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  settleAllExpenseForUnVerifiedRequest,
  settleAllExpenseRequest,
} from "../../../store/actions/expenseActions";
import { Friend, GlobalState } from "../../../store/types";
import PrimaryButton from "../../navbarComponent/PrimaryButtonComponent";
import AddExpenseModal from "../addExpenseModal";
import ExpenseDisplayList from "../expensDisplayList";

const FriendExpenseTab = ({ friendUID, userName, isVerified }: Friend) => {
  const [display, setDisplay] = useState(false);
  const friendsData = useSelector(
    (state: GlobalState) => state.friends.friends
  );
  const index = friendsData.findIndex((data) => {
    return data.friendUID === friendUID;
  });
  const dispatch = useDispatch();

  const paymentDetails = index >= 0 ? friendsData[index].paymentDetails : [];
  return (
    <div className="flex flex-col px-2">
      <div className="flex flex-row w-full justify-between items-center px-2 border-b">
        <div className=" text-gray-700 text-xl">{userName}</div>
        <div className="flex flex-row">
          <PrimaryButton
            label="Add expense"
            onClick={() => {
              setDisplay(true);
            }}
          />
          <PrimaryButton
            label="Settle all"
            onClick={() => {
              const userUID = localStorage.getItem("uid") as string;
              isVerified
                ? dispatch(settleAllExpenseRequest(userUID, friendUID))
                : dispatch(
                    settleAllExpenseForUnVerifiedRequest(userUID, friendUID)
                  );
            }}
          />
        </div>
      </div>
      <div className="pt-3">
        {paymentDetails.length > 0 ? (
          <ExpenseDisplayList
            isVerified={isVerified}
            paymentDetails={paymentDetails}
            friendName={userName}
            friendUID={friendUID}
          />
        ) : (
          ""
        )}
      </div>
      <AddExpenseModal
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
