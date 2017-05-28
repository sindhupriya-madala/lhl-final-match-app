class EditService extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      hourly_rate: ''
    };
    // this.handleChange = this.handleChange.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeHourlyRate = this.onChangeHourlyRate.bind(this);
    this.updateProfile = this.updateProfile.bind(this);
    console.log("current_user is:", this.props.current_user);
  } 
  handleChange(event) {
    this.setState({category_id: event.target.value});
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
      service: {
        hourly_rate: this.state.hourly_rate, 
        description: this.state.description,
        category_id: this.state.category_id
        }
    }
    $.ajax({ 
      url: '/services', 
      type: 'POST', 
      data: data,
      success: (e) => { 
        console.log('it worked!', e);
      } 
    });
  }

render() {
    return(
      <form>
        <div className="card large purple lighten-5">
          <div className="card-content black-text">
            <span className="card-title center pink-text lighten-1"><h3>Edit Profile</h3></span>
            <div className="row">
              <div className="input-field col s6">
                <input defaultValue={this.props.current_user.first_name} id="first_name" type="text" className="validate"></input>
                <label className="active" htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input defaultValue={this.props.current_user.last_name} id="last_name" type="text" className="validate"></input>
                <label className="active" htmlFor="last_name">Last Name</label>
              </div>
              <div className="input-field col s6">
                <input defaultValue={this.props.service.hourly_rate} id="hourly_rate" type="text" className="validate"></input>
                <label className="active" htmlFor="hourly_rate">Hourly Rate</label>
              </div>
              <div className="input-field col s12">
                <textarea id="description" className="materialize-textarea validate"></textarea>            
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