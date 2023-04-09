import React from "react";
import { withToggler } from "../HOK/withToggler";
import albumImg from "../../Img/92c952.png";
import buttonImg from "../../Img/9484251.png"

const Album = ({title, albumImg, buttonImg, toggled, changeToggle}) => {
    return (
        <div>
            <p>Name: {title}</p>
            <div>{albumImg}</div>
            <button onClick={changeToggle}>
                {toggled ? {buttonImg} : ""}
            </button>
        </div>
    )
}

export default withToggler(Album)