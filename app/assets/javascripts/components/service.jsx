class Service extends React.Component{
	constructor(props) {
    super(props);
		this.state = {
			service : this.props.service[0],
			reviews : 'hello', //this.props.reviews,
      user: this.props.user
		}
    this.newReview =  this.newReview.bind(this);
		console.log("service details  fron service is",this.state.service);
		console.log("user details is :",this.props.user);
		console.log("current_user details is :",this.props.current_user);

  };

	newReview(newreview) {
    var newReview = this.state.reviews.concat(newreview);
		this.setState({ reviews: newReview })
  };

  render(){
		console.log("service details is",this.props.service);
		console.log("user details is :",this.props.user);

    return(
			<div>
				<div className="row">
					<div className="col s12"><h1 className="orange-text"> Social Worker </h1></div>
					<div className="col s12 m6"><ServiceCard service={this.state.service} user={this.state.user}/></div>
					<div className="col s12 m6"><ReviewMessageCard /></div>
				</div>
					<div className="row"><AllReviews reviews={this.state.reviews} /></div>
			</div> 
    )
  }
}