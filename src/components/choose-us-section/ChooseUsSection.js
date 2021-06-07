import React from 'react'
import './choose-us.css';
export const ChooseUsSection = () => {
    
    const denomStyle1 = {
        width: '300px',
        height: '100px'
    }

    const denomStyle2 = {
        width: '300px',
        height: '100px'
    }

    return (
        <section className="choose-us-section">
            <div className="choose-us-wrapper">
                <p className="choose-us-section-title">
                    Don’t let brokerage* eat into your profits!
                </p>
                <div className="choose-us-section-offers">
                    <div className="choose-us-section-offers--offer">
                        <div>
                            <img 
                                src="./assets/images/choose-us-section-images/denom1.svg"
                                alt="Rs0"
                                style={denomStyle1}
                            />
                        </div>
                        <p>Brokerage</p>
                        <p>On investing in stocks for more than a day</p>
                    </div>
                    <div className="choose-us-section-offers--offer">
                        <div>
                        <img
                            id="offer2"
                            src="./assets/images/choose-us-section-images/denom2.svg"
                            alt="Rs20"
                            style={denomStyle2}
                        />
                        </div>
                        <p>Commission</p>
                        <p>On investing in Mutual Funds and Digital Gold</p>
                    </div>
                    <div className="choose-us-section-offers--offer">
                        <div>
                        <img 
                            src="./assets/images/choose-us-section-images/denom1.svg"
                            alt="Rs0"
                            style={denomStyle1}    
                        />
                        </div>
                        <p>Charges</p>
                        <p>For opening an account online with Fincoin</p>
                    </div>
                </div>
                <p className="choose-us-section-info">
                ₹25 + 18% GST are levied to maintain your Demat account with us every month. 
                We promise there are no hidden charges, view the complete list here.
                </p>
            </div>
        </section>
    )
}
