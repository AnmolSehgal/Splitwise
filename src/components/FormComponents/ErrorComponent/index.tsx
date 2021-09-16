interface ErrorComponentProps {
  message: string;
}

const ErrorComponent = ({ message }: ErrorComponentProps) => {
  return <span className=" text-red-500 pb-2">{message}</span>;
};

export default ErrorComponent;
