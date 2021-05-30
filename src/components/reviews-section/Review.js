import React from 'react'
import { InlineIcon } from '@iconify/react';
import previousIcon from '@iconify/icons-grommet-icons/previous';
import nextIcon from '@iconify/icons-grommet-icons/next';
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
                    <div>
                        <InlineIcon icon={previousIcon} className="review-button previous" />
                        <img
                            className="review-image" 
                            src="./assets/images/review-section-images/customer1.png"
                            alt="reviewer-customer"
                        />
                        <InlineIcon icon={nextIcon} className="review-button next"/>
                    </div>
                    <p className="reviewer-name">
                        Rita Sweet
                    </p>
                    <p className="review-comment">
                     Superb app! The rates are live and real time and the charting is very good.
                     Supports major Indian markets along with FnO too!
                    </p>
                </div>
            </div>
        </section>
    )
}
