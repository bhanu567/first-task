import "./Card.css";

function Card(props){
    const classes = "card "+props.className; //white space must be given otherwise className will not be applicable
    return (
        <div className = {classes}>{props.children}</div>
    );
}
export default Card;
//defining self component as the predefined component