import React from "react";


export const ProductCard = ({id, name, description, price, image, category, rating}) => {
    return(
        <div>
            <p> Product number - {id} </p>
            <p>Name - {name}</p>
            <p>Description - {description}</p>
            <p>Price - {price}</p>
            <p>Image - {image}</p>
            <p>Category - {category}</p>
            <p>Rating - {rating}</p>
            <p></p>
            <p></p>
        </div>
    )
}