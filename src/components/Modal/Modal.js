const Modal = ({ fact }, props) =>{
return(
    <div className="modal">
        <h4>A random fact on Cats</h4>
        <p>{fact}</p>
    </div>
);
}
export default Modal;