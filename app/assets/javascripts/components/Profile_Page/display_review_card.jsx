const DisplayReviewCard = ({review}) => 
  <div className="col s4">
    <div className="card blue-grey darken-1">
        <div className="card-content white-text">
        <span className="card-title">{review.first_name} {review.last_name}</span>
        <p>{review.description}</p>
        </div>
        <div className="card-action">
        <h6 className="orange-text ">Rating : <span> {review.rating} </span></h6>
      </div>
    </div>
  </div>
