class ServiceCard extends React.Component {
	constructor(props) {
		super(props);
		const avatar_url = `user/avatar/${this.props.user.id}/avatar.jpg` 
		this.state = {
			service : this.props.service,
			user : this.props.user,
			average_rating : this.props.average_rating,
			avatar_url: this.props.user.avatar ? avatar_url : `fallback/default-avatar.jpeg`
		}
		console.log("props is:", this.props);
		console.log("average rating from service card is:", this.state.average_rating);
		console.log("user in service card is:", this.state.user);
		console.log("service details from service card is :", this.props.service);
	}
	render() {
		return(
			<div className="row">
				<div className="services-column">
					<div className='card-container'>
						<div className="card">
							<div className="card-image row">
								<div className="profile-pic col s6">
									<Img src={this.state.avatar_url} alt={this.state.user.avatar} className=''/>
								</div>
								<div className="">
									<h5 className="name">
										{this.state.user.first_name +" "+ this.state.user.last_name}
									</h5>
									<p className='category-name'> Profession: 
										{this.state.service.name && <span>{"  " + this.state.service.name}</span>}
									</p>
									<p className='average-rating'> Average Rating: 
										{this.state.service.average_rating && <span>{"  " + this.state.service.average_rating}</span>}
									</p>
									<p className='hourly-rate'> Hourly Rate:   
										{this.state.service && <span>{"  $" + this.state.service.hourly_rate}</span>}
									</p>
								</div>
							</div>
							<div className='card-stacked'>
								<div className="card-content">
										<div className='card-action'>
											{this.state.service && <p>{this.state.service.description}</p>}
										</div>
								</div>
							</div>
						</div>
						{/*<div className="card-action row">
						</div>*/}
					</div>
				</div>
			</div>
			
		)
	}
}
