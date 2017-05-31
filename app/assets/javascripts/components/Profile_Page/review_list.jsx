const ReviewsList = ({reviews}) =>
  <div className="row">
    {reviews && reviews.map( (review) => {      
        return( <DisplayReviewCard key={review.id} review={review} /> )
    })}
  </div>
