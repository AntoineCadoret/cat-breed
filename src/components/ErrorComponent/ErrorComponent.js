const ErrorComponent = ({ error }, props) => {
  return (
    <div>
      <h2 className="text-xl font-bold">An error occured</h2>
      <p className="text-red-700">Error : {error.message}</p>
    </div>
  );
};
export default ErrorComponent;
