import { useSelector } from "react-redux";
import { GlobalState } from "../../../store/types";
import CardComponent from "../../cardComponent";
import CurrentExpenseList from "./expenseHistoryList";

const DashboardComponent = () => {
  const friends = useSelector((state: GlobalState) => state.friends.friends);

  let owed = 0,
    owe = 0;
  friends.forEach((val) => {
    val.paymentDetails.forEach((val) => {
      if (!val.settleStatus)
        val.payerUID === localStorage.getItem("uid")
          ? (owed += val.friendAmount)
          : (owe += val.friendAmount);
    });
  });
  return (
    <div className="flex flex-col items-center w-full px-3">
      <div className="border-b text-xl mb-2 w-full text-gray-700">
        My Dashboard
      </div>
      <CardComponent owe={owe} owed={owed} />
      <div className="w-full text-gray-700 text-xl border-b mb-2">Details</div>
      <div className="flex flex-row flex-wrap w-full">
        <div className="flex w-64 md:w-1/2">
          <CurrentExpenseList
            handleCheck={(amount: number) => {
              return amount > 0;
            }}
            className="bg-green-500"
            listName="You lent"
            message="No dues"
          />
        </div>
        <div className="flex w-64 md:w-1/2">
          <CurrentExpenseList
            handleCheck={(amount: number) => {
              return amount < 0;
            }}
            className="bg-red-500"
            listName="you owe"
            message="You do not owe anything"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
