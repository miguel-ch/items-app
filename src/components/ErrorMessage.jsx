const ErrorMessage = ({ message }) => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <p className="text-xl opacity-50 text-white">An error has occurred!</p>
      <p className="text-lg opacity-50 text-white">{message}</p>
    </div>
  );
};
export default ErrorMessage;
