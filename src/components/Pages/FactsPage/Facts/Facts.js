const Facts = ({ index, fact }) => {
  return (
    <p key={index} className="mx-5 my-7 text-slate-800">
      <span className="font-bold">{index + 1}.</span> {fact}
    </p>
  );
};
export default Facts;
