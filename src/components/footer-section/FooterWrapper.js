import React from 'react'

export const FooterWrapper = () => {
    return (
        <div className='footer-wrapper'>
            <div className="footer-column col1">
                <h4>Products</h4>
                <p>Company</p>
                <p>Tools</p>
                <p>Social</p>
            </div>

            <div className="footer-column col2">
                <h4>Company</h4>
                <p>About Us</p>
                <p>Market Talks</p>
                <p>Brokerage Charges</p>
                <p>Refer and Earn</p>
                <p>Announcement</p>
                <p>Partner with us</p>
            </div>

            <div className="footer-column col3">
                <h4>Tools</h4>
                <p>Brokerage Tools</p>
                <p> Strategy Tools</p>
                <p>Visual Tools</p>
                <p>Chat Tools</p>
            </div>

            <div className="footer-column col4">
                <h4>Social</h4>
                <div className="social-icon">
                    <img src="./assets/images/footer-section-images/facebook-icon.svg" alt="facebook"/>
                </div>
                <div className="social-icon">
                    <img src="./assets/images/footer-section-images/twitter-icon.svg" alt="twitter"/>
                </div>
                <div className="social-icon">
                    <img src="./assets/images/footer-section-images/insta-icon.svg" alt="instagram"/>
                </div>
                <div className="social-icon">
                    <img src="./assets/images/footer-section-images/youtube-icon.svg" alt="youtube"/>
                </div>
            </div> 
            <p className="footer-copyright-info">
                All Rights Reserved. Copyright © Fincoin 2021
            </p>       
        </div>
    )
}
