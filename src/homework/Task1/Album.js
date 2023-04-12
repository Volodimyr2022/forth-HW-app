import React from "react";
import { withToggler } from "../HOC/withToggler";
import albumImg from "../../Img/92c952.png";
import buttonImg from "../../Img/9484251.png"

const Album = ({title, albumImg, buttonImg, toggled, changeToggle}) => {
    return (
        <div>
            <p>Name album: {title}</p>
            <div>
                <img src={albumImg} alt="album"/>  
            </div>
            <button onClick={changeToggle}>
                {toggled ? "" : <img src={buttonImg} alt="heart" width={20} height={10}/>}
            </button>
        </div>
    )
}

export default withToggler(Album)