const Facts = ({index, fact}, props) =>{
    return(<p key={index} className="m-2">{index+1}. {fact}</p>);
};
export default Facts;