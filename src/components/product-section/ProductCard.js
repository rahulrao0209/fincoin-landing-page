import React from 'react'
import products from './products-info.json';
import { InlineIcon } from '@iconify/react';
import tickCircleSolid from '@iconify/icons-teenyicons/tick-circle-solid';

export const ProductCard = ({ currIndex }) => {
    const productsData = JSON.parse(JSON.stringify(products));
    return (
        <section className="product-card">
            <div className="product-card-content">
                <p className="product-card-content-title">
                    {productsData[currIndex].productName}
                </p>
                <div className="product-card-content-features">
                    {productsData[currIndex].features.map((feature, index) => {
                        return (
                            <div key={index} style={{margin: '1rem 0'}}>
                                <InlineIcon icon={tickCircleSolid} style={{fontSize: '28px', verticalAlign: 'middle', marginRight: '8px'}} />
                                <span className="product-card-content-features--feature" /*style={featureStyle}*/>{feature}</span>
                            </div>
                        )
                    })}
                </div>  
            </div>
            <div className="product-card-images">
                    <div className="product-card-image">
                        <img 
                            src={`${productsData[currIndex].image}`}
                            alt="digital-wallet"    
                            />       
                    </div>
            </div>
        </section>
    )
}
