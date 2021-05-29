import React from 'react'
import '../../shared.css';
import './products.css';
import { ProductsBar } from './ProductsBar';

export const ProductSection = () => {
    return (
        <section className="products-section">
            <div className="products-section-wrapper">
                <p className="products-section-title">
                    One Platform. Multiple investment Opportunities
                </p>
                <p className="products-section-content">
                    Long term investors, pro traders or part-time traders 
                    can choose across various asset classes and create a 
                    customised portfolio. All from one platform.
                </p>
                <ProductsBar />
            </div>
        </section>
    )
}
