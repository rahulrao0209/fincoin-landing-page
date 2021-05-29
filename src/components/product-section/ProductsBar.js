import React, { useState } from 'react'
import products from './products-info.json';
import { ProductCard } from './ProductCard';
export const ProductsBar = () => {

    const [value, setValue] = useState(0);

    return (
        <div className="products-bar">
              {products.map((product, index) => {
                     return (
                         <div 
                            key={product.id} 
                            className='products-bar-product' 
                            onClick={() => setValue(index)}
                        >
                            <span>{product.productName}</span>
                         </div>
                     )
                 })}
                 <ProductCard currIndex={value} />
        </div>
    )
}
    