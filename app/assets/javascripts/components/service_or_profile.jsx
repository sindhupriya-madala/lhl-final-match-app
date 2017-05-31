class ServiceOrProfile extends React.Component{
	constructor(props) {
    super(props);
		this.state = {
			service : this.props.service,
      categories: this.props.categories,
			reviews : this.props.reviews,
      userInfo : this.props.userInfo,
      current_user : this.props.current_user,
			show_review_message : false,
			show_add_edit_delete : false
		}
  };

  render() {

    console.log("service in service or profile", this.props.service);
    const service = this.props.isUser ? 
      <MyProfile 
        categories={this.state.categories} 
        service={this.state.service} 
        user={this.state.userInfo}
        reviews = {this.state.reviews}/> 
      : <Service 
        service={this.state.service}
        user={this.state.userInfo}
        reviews = {this.state.reviews}
        current_user = {this.state.current_user}
      />
    return(
      <div>
        {service}
      </div>
    )  
  }
}