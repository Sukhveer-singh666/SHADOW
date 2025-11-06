import React from "react";
import "./Cards.css";

function Cards() {
 return(
    <div className="cards">
        <img src={props.image} alt={props.title}className="card.image" />
        <h3 className="card-title">{props.title}</h3>
        <p className="card-deseription">{props.description}</p>
    </div>
 );
}
export default Cards;
