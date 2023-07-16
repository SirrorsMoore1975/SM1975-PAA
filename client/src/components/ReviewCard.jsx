import React from 'react';
import "./ReviewCard.css"

const ReviewCard = (props) => {
  const { reviews } = props;
  return (
    <div className='reviews-div'>
      {
        reviews.map((review) => {
          return (
            <div className='review-card'>
              <h3>{review.reviewer_name}</h3>
              <div className="scores">
                <span className='overall'>Overall: {review.overall}</span>
                <span className='ease_of_use'>Ease Of Use: {review.ease_of_use}</span>
                <span className='coverage'>Coverage: {review.coverage}</span>
                <span className='price'>Price: {review.price}</span>
                <span className='customer-service'>Customer service: {review.customer_service}</span>
              </div>
              <p className="review-text">{review.customer_review}</p>
            </div>
          )
        })
      }
    </div>
  )
}

ReviewCard.defaultProps = {
  reviews: [],
  
};

export default ReviewCard;