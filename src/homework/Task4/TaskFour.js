import React from "react";
import { ProductCardList } from "./ProductCardList";
import { ProductMaker } from "./ProductMaker";


const PRODUCT_URL = "https://fakestoreapi.com/products"

export const TaskFour = () => {
    return (
        <div>
            <ProductMaker
                url={PRODUCT_URL}
                renderProductUrl={(data) => <ProductCardList products={data} />}
            />
        </div>
    )
}