interface AmountDisplayComponentProps {
  owed: boolean;
  amount: number;
}

const AmountDisplayComponent = ({
  owed,
  amount,
}: AmountDisplayComponentProps) => {
  return (
    <div className="flex flex-col">
      <div>{owed ? "total owed" : "total owe"}</div>
      <div>Rs : {amount}</div>
    </div>
  );
};

export default AmountDisplayComponent;
