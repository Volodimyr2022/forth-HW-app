import React from "react";
import { Tooltip } from "./Tooltip";

export const ProductCard = ({title, description, image, price, rate}) => {
    return(
        <div>
            <hr></hr> 
            <h2>{title}</h2>
            <p>{description}</p>
            <Tooltip 
                renderTooltip = {(handleMouseMove, toggleTooltipShown) => {
                    return (
                        <img
                        className="container"
                        src={image}
                        alt="products"
                        width={500}
                        height={500}
                        onMouseEnter={() => toggleTooltipShown()}
                        onMouseLeave={() => toggleTooltipShown()}
                        onMouseMove={() => handleMouseMove()}
                    />
                    )
                }}
                content={`Name: ${title} Price: ${price} Rating: ${rate}`}
            />
        </div>
    )
}