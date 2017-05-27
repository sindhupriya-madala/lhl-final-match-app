class AddService extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      category_id: '1',
      description: '',
      hourly_rate: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeHourlyRate = this.onChangeHourlyRate.bind(this);
    this.updateProfile = this.updateProfile.bind(this);

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
    // var description = this.state.description;
    // var hourly_rate = this.state.hourly_rate;
    // var category = this.state.category;
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

  render(){
    const categories = this.props.categories.map((cat) => { 
      return (
        <option key={cat.id} value={cat.id}> {cat.name}</option>
      )
    });
    return(
      <form onSubmit={this.updateProfile}>
        <div className="card large purple lighten-5">
          <div className="card-content black-text">
            <span className="card-title center pink-text lighten-1"><h3>Add Service</h3></span>
            <div className="row">
              <div className="input-field col s6 center">
                <select value={this.state.category_id} className="browser-default category" onChange={this.handleChange}>
                  {categories}
                </select>       
              </div>
              <div className="input-field col s6 center">
                <input defaultValue='15' id="hourly_rate" type="text" className="validate" onChange={this.onChangeHourlyRate}></input>
                <label className="active" htmlFor="hourly_rate">Hourly Rate</label>
              </div>
              <div className="input-field col s12">
                <textarea id="description" className="materialize-textarea validate description" onChange={this.onChangeDescription}></textarea>            
                <label className="active" htmlFor="description">Description</label>
              </div>
            </div>
            <div className="card-action">
              <button className="btn waves-effect waves-light" type="submit" >Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>
        </div>
      </form>
    )
  }
}