import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero-section/Hero';
import { ProductSection } from './components/product-section/ProductSection';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <ProductSection />
        </>
    )
}

export default App;