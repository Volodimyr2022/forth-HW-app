import React from "react";
import { ProductCard } from "./ProductCard";

export const ProductCardList = ({ products }) => {
    return(
        <div>
            {products.map(product => (
                <ProductCard 
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    category={product.category}
                    rating={product.rating}
                    key={product.id}
                />
            ))}
        </div>
    )
}