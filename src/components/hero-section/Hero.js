import React from 'react'
import '../../shared.css';
import './hero.css';

export const Hero = () => {
    const options = ['Stocks', 'Mutual Funds', 'Bonds', "IPO's", 'Digital Gold'];
    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        setTimeout(() => {
            let newIndex = index === 4 ? 0 : index + 1;
            setIndex(newIndex);
        }, 2000)
    }, [index])

    return (
        <section className="hero-section">
            <div className="hero-wrapper">
                <div className="hero-content">
                    <p className="hero-content-title">
                    Simple and smart way to start investing in
                    <br/>
                    <span>{options[index]}</span>
                    </p>
                    <a className="hero-button" href="#startInvesting">
                        Start Investing
                    </a>
                </div>
                <div className="hero-image">
                    <img src="./assets/images/hero-section-images/hero-image.svg" alt="hero-illustration"></img>
                </div>
            </div>
        </section>
    )
}
