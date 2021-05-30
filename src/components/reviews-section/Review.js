import React from 'react'
import './review.css';

export const Review = () => {
    return (
        <section className="review-section">
            <div className="review-section-wrapper">
                <div className="review-section-wrapper-titles">
                    <p className="review-section-wrapper-titles--primary">
                        Trusted By Lakhs of People
                    </p>
                    <p className="review-section-wrapper-titles--secondary">
                        See what our customers say
                    </p>
                </div>
                <div className="review-section-wrapper-reviews">
                    <img
                        className="review-image" 
                        src="./assets/images/review-section-images/customer1.png"
                        alt="reviewer-customer"
                    />
                    <p className="review-comment">
                     Superb app! The rates are live and real time and the charting is very good.
                     Supports major Indian markets along with FnO too!
                    </p>
                </div>
            </div>
        </section>
    )
}
