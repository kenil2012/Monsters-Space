import React from "react";
import "../card/card.style.css";

export const Card = (props) => {
    return(
<div class="card-container">
<img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt="monster"></img>
<h1>{props.monster.name}</h1>
<h2>{props.monster.email}</h2>
</div>
    )
}