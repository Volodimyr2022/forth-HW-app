import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductCardList = ({ products }) => {
    return(
        <div>
            {products.map(product => (
                <ProductCard 
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                    rate={product.rating.rate}
                    count={product.rating.count}
                    key={product.id}
                />
            ))}
        </div>
    )
}