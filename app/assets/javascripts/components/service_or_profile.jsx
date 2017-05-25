class ServiceOrProfile extends React.Component{
	constructor(props) {
    super(props);
		this.state = {
			service : this.props.service,
			reviews : this.props.reviews,
      current_user: this.props.current_user,
			user : this.props.user,
			show_review_message : false,
			show_add_edit_delete : false
		}
    this.isMyService = this.isMyService.bind(this);
  };

  isMyService() {
    if(this.props.current_user === this.props.user) {
      return false;
    } else {
      return true;
    }
	}


  render() {
    console.log(this.isMyService());
    const service = this.isMyService()?<Service /> : <MyProfile />
    return(
      <div>
        {service}
      </div>
    )  
  }
}