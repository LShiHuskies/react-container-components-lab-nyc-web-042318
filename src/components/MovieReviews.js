// Code MovieReviews Here
import React from 'react';

const MovieReviews = ({reviews}) => {

  let reviewObject = reviews.map((review) => {
    return (
      <div className="review">
      <h1>Title: {review.display_title}</h1>
      <h2>Byline: {review.byline}</h2>
      <h3>Summary: {review.summary_short}</h3>
      <p>Headline: {review.headline}</p>
      </div>
    )
  })
  return (
    <div className='review-list'>
    <ul>{reviewObject}</ul>
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}


export default MovieReviews
