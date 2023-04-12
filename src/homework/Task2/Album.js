import React from "react";


const Album = ({id, title}) => {
    return (
        <div>
            <hr></hr>
            <p>Album number - {id}</p>
            <p>Name album: {title}</p>
        </div>
    )
}

export default Album