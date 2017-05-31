class ServiceCard extends React.Component {
	constructor(props) {
		super(props);
		const avatar_url = `user/avatar/${this.props.user.id}/avatar.jpg` 
		this.state = {
			service : this.props.service,
			user : this.props.user,
			avatar_url: this.props.user.avatar ? avatar_url : `fallback/default-avatar.jpeg`
		}
		console.log("props is:", this.props);
		console.log("user in service card is:", this.state.user);
		console.log("service details from service card is :", this.props.service);
	}
	render() {
		return(
			<div className="row">
				<div className="services-column">
					<div className="card">
						<div className="card-image row">
							<Img src={this.state.avatar_url} alt={this.state.user.avatar} height={250} className="col s6"/>
							<h5 className="card-title yellow-text accent-2 col s6">{this.state.user.first_name +" "+ this.state.user.last_name}</h5>
						</div>
						<div className="card-content">
							{this.state.service && <p>{this.state.service.description}</p>}
						</div>
						<div className="card-action row">
							<div className="col s6 center-align">	
								<a href="#">Average Rating</a>
								<label>3.5</label>
							</div>
							<div className="col s6 center-align">
								<a href='#'>Hourly Rate : </a>
								{this.state.service && <label>{"$ " + this.state.service.hourly_rate}</label>}
							</div>
						</div>
						<div>  
							<a className="waves-effect waves-light btn right" >Book Service</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}