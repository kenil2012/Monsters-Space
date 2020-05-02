import React from "react";
import "../search-box/search-box.style.css"

export const SearchBox = (props) => {
    return(
        <input className="search" type="search" placeholder={props.placeholder} onChange={props.changeEvent} />
    )
}