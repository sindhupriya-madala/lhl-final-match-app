class AddService extends React.Component{
  constructor(props) {
    super(props);
    this.state = {value: 'painter'};
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  updateProfile(){
    var description = this.refs.description.value;
    var hourly_rate = this.refs.hourly_rate.value;
    var category = this.className.category.value;
    event.preventDefault();
    var data = { 
      service: {hourly_rate, description},
      category: {category}
    }

    $.ajax({ 
      url: '/services/new', 
      type: 'POST', 
      data: data,
      success: (data) => { 
        console.log('it worked!', data);
      } 
    });
  }

  render(){
    const categories = this.props.categories.map((cat) => { 
      return (
        <option key={cat.id}> {cat.name}</option>
      )
    });
    return(
      <form onSubmit={this.updateProfile}>
        <div className="card large purple lighten-5">
          <div className="card-content black-text">
            <span className="card-title center pink-text lighten-1"><h3>Add Service</h3></span>
            <div className="row">
              <div className="input-field col s6 center">
                <select value={this.state.value} className="browser-default category" onChange={this.handleChange}>
                  {categories}
                </select>       
              </div>
              <div className="input-field col s6 center">
                <input defaultValue='15' id="hourly_rate" type="text" className="validate"></input>
                <label className="active" htmlFor="hourly_rate">Hourly Rate</label>
              </div>
              <div className="input-field col s12">
                <textarea ref='description' id="description" className="materialize-textarea validate"></textarea>            
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