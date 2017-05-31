class EditService extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.service.id,
      description:this.props.service.description,
      hourly_rate: this.props.service.hourly_rate,
      first_name: this.props.current_user.first_name,
      last_name: this.props.current_user.last_name
    };
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeHourlyRate = this.onChangeHourlyRate.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    console.log("service is:", this.props.service);
  } 
  
  onChangeFirstName(event){
    this.setState({first_name: event.target.value});
    console.log('=================',event.target.value);
  }

  onChangeLastName(event){
    this.setState({last_name: event.target.value});
    console.log('=================',event.target.value);
  }

  onChangeDescription(event){
    this.setState({description: event.target.value});
    console.log('=================',event.target.value);
  }

  onChangeHourlyRate(event){
    this.setState({hourly_rate: event.target.value});
    console.log('=================',event.target.value);
  }
  updateProfile(){
    event.preventDefault();
    var data = { 
      hourly_rate: this.state.hourly_rate, 
      description: this.state.description,
      first_name: this.state.first_name,
      last_name:this.state.last_name
    }
    $.ajax({ 
      url: `/services/${this.state.id}/edit`, 
      type: 'GET', 
      data: data,
      success: (data) => { 
        console.log('updating.....................',data);
        this.props.changeService(data);
      } 
    });
  }

render() {
    return(
      <form>
        <div className="card  purple lighten-5">
          <div className="card-content black-text">
            <span className="card-title center pink-text lighten-1"><h3>Edit Profile</h3></span>
            <div className="row">
              <div className="input-field col s6">
                <input defaultValue={this.state.first_name} id="first_name" type="text" className="validate" onChange={this.onChangeFirstName}></input>
                <label className="active" htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input defaultValue={this.state.last_name} id="last_name" type="text" className="validate" onChange={this.onChangeLastName}></input>
                <label className="active" htmlFor="last_name">Last Name</label>
              </div>
              <div className="input-field col s6">
                <input defaultValue={this.state.hourly_rate} id="hourly_rate" type="text" className="validate" onChange={this.onChangeHourlyRate}></input>
                <label className="active" htmlFor="hourly_rate">Hourly Rate</label>
              </div>
              <div className="input-field col s12">
                <input defaultValue={this.state.description} id="description" className="materialize-textarea validate" onChange={this.onChangeDescription}></input>            
                <label className="active" htmlFor="description">Description</label>
              </div>
            </div>
            <div className="card-action">
              <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.updateProfile}>Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}