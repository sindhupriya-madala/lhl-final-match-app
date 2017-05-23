class Services extends React.Component{
	constructor(props) {
    super(props);
		this.state = {
			service : this.props.service,
			reviews : 'hello'//this.props.reviews
		}
    this.newReview =  this.newReview.bind(this);
  };

	newReview(newreview) {
    var newReview = this.state.reviews.concat(newreview);
		this.setState({ reviews: newReview })
  };

  render(){
    return(
			<div>
				<div className="row">
					<div className="col s12"><h1 className="orange-text"> Social Worker </h1></div>
					<div className="col s12 m6"><ServiceCard service={this.state.service}/></div>
					<div className="col s12 m6"><ReviewMessageCard /></div>
				</div>
					<div className="row"><AllReviews reviews={this.state.reviews} /></div>
			</div> 
    )
  }
}