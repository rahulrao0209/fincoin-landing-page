import React from 'react'
import { InlineIcon } from '@iconify/react';
import previousIcon from '@iconify/icons-grommet-icons/previous';
import nextIcon from '@iconify/icons-grommet-icons/next';
import customers from './customers.json';
import './review.css';

export const Review = () => {
    const [index, setIndex] = React.useState(1);
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
                        <img
                            className="review-image" 
                            src={customers[index].image}
                            alt="reviewer-customer"
                        />
                        <div onClick={() => setIndex(index === 0 ? customers.length - 1 : index - 1)}>
                       <InlineIcon icon={previousIcon} className="review-button previous"/>
                       </div>
                        <div  onClick={() => setIndex(index === customers.length - 1 ? 0: index + 1)}>
                        <InlineIcon icon={nextIcon} className="review-button next"/>
                        </div>
                    </div>
                    <p className="reviewer-name">
                       {customers[index].name}
                    </p>
                    <p className="review-comment">
                     {customers[index].review}
                    </p>
                </div>
            </div>
        </section>
    )
}
