const ErrorComponent = ({ error }, props) => {
  return (
    //   Affiche le message d'erreur si l'appel d'API ne fonctionne pas
    <div>
      <h2 className="text-xl font-bold">An error occured</h2>
      <p className="text-red-700">Error : {error.message}</p>
    </div>
  );
};
export default ErrorComponent;
