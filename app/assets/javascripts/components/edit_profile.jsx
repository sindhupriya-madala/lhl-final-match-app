const EditProfile = (props) => {
    
  const updateProfile = (event) => {
  
    event.preventDefault()

    $.ajax({ 
      url: '/services/1', 
      type: 'POST', 
      data: { 
        user: {first_name, last_name}, 
        service: {hourly_rate, description}
      }, 
      success: (data) => { 
        console.log('it worked!', response);
        this.props.updatedProfile(data); 
      } 
    });
  };

    return(
      <form>
        <div className="card large orange lighten-5">
          <div className="card-content black-text">
            <span className="card-title">Edit Profile</span>
            <div className="row">
              <div className="input-field col s6">
                <input defaultValue="Alvin" id="first_name" type="text" className="validate"></input>
                <label className="active" htmlFor="first_name">First Name</label>
              </div>
              <div className="input-field col s6">
                <input defaultValue="shah" id="last_name" type="text" className="validate"></input>
                <label className="active" htmlFor="last_name">Last Name</label>
              </div>
              <div className="input-field col s6">
                <input defaultValue='15' id="hourly_rate" type="text" className="validate"></input>
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