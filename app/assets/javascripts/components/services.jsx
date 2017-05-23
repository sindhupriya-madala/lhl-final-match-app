class Services extends React.Component{
	constructor(props) {
    super(props);
		this.state = {
			service : this.props.service,
			reviews : this.props.reviews
		}
    this.newMessage =  this.newMessage.bind(this);
  };

	newMessage(newmessage) {
    
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
					<div className="row"><AllReviews reviews={this.state.reviews}/></div>
			</div> 
    )
  }
}