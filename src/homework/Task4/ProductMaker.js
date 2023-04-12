import React, { useEffect, useState } from "react";


export const ProductMaker = ({url, renderProductUrl}) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(url) 
            .then((response) => response.json())
            .then((json) => setProducts(json))
    }, [url])

    return(
        <div>
            {renderProductUrl(products)}
        </div>
    )
}
