import React from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Hero } from './components/hero-section/Hero';
import { ProductSection } from './components/product-section/ProductSection';
import { ChooseUsSection } from './components/choose-us-section/ChooseUsSection';
import { Review } from './components/reviews-section/Review';
import { Footer } from './components/footer-section/Footer';

function App() {
    return (
        <>
            <Navbar />
            <Hero />
            <ProductSection />
            <ChooseUsSection />
            <Review />
            <Footer />
        </>
    )
}

export default App;