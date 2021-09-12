import { useSelector } from "react-redux";
import { GlobalState } from "../../../store/types";
import CardComponent from "../../cardComponent";

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
      <CardComponent owe={owe} owed={owed} />
    </div>
  );
};

export default DashboardComponent;
