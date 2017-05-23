class AllReviews extends React.Component{
  // constructor(props) {
  //   super(props);
  // }
  render(){
    /*const reviews = this.props.reviews.map((review) => {
      return (
        <div className="col s4">
          <DisplayReviewCard review={review}/>
        </div>
      )
    });*/
    return(
        <div>
          {/*{reviews}*/}
          <div className="col s4">
            <DisplayReviewCard />
          </div>
          <div className="col s4">
            <DisplayReviewCard />
          </div>
          <div className="col s4">
            <DisplayReviewCard />
          </div>
          <div className="col s4">
            <DisplayReviewCard />
          </div>
          <div className="col s4">
            <DisplayReviewCard />
          </div>
          <div className="col s4">
            <DisplayReviewCard />
          </div>
          <div className="col s4">
            <DisplayReviewCard />
          </div>
          <div className="col s4">
            <DisplayReviewCard />
          </div>
      </div>
    )
  }
}