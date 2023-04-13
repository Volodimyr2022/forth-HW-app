import React, { useState } from "react";

export const Tooltip = ({renderTooltip, content}) => { 

    const [position, setPosition] = useState({x: 0, y: 0})
    const [isTooltipShown, setIsTooltipShown] = useState(false)

    // const handleMouseEnter = (e) => {
    //     isTooltipShown(true)
    // }

    // const handleMouseLeave = (e) => {
    //     isTooltipShown(false)
    // }

    const toggleTooltipShown = () => {
        setIsTooltipShown(prevState => !prevState);
    }

    const handleMouseMove = (e) => setPosition({x: e.clientX, y: e.clientY})
    console.log(position.x)

    return(
        <div>
            {renderTooltip(toggleTooltipShown, handleMouseMove)}
            {isTooltipShown && (
            <div className="content" style={{left: position.x, top: position.y}}>
                {content}
            </div>)
            }
        </div>
    )
}