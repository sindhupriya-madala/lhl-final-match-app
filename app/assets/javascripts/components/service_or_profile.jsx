class ServiceOrProfile extends React.Component{
	constructor(props) {
    super(props);
		this.state = {
			service : this.props.service,
      categories: this.props.categories,
			reviews : this.props.reviews,
			show_review_message : false,
			show_add_edit_delete : false
		}
  };

  render() {

    console.log(this.props.userInfo.email);
    const service = this.props.isUser ? <MyProfile /> : <Service />
    return(
      <div>
        {service}
      </div>
    )  
  }
}