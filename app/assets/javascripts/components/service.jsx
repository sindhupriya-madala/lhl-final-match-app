class Service extends React.Component{
	constructor(props) {
    super(props);
		this.state = {
			service : this.props.service,
			reviews : this.props.reviews,
      user: this.props.user,
			current_user : this.props.current_user
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
					<div className="col s12"><h2 className="orange-text center"> <i>Profile Details</i> </h2></div>
					<div className="col s12 m6"><ServiceCard service={this.state.service} user={this.state.user}/></div>
					<div className="col s12 m6">
						<ReviewMessageCard
							 user={this.state.user} 
							 service={this.state.service}
							 current_user={this.state.current_user}
						/>
					</div>
				</div>
					<div className="row"><ReviewsList reviews={this.state.reviews} /></div>
			</div> 
    )
  }
}