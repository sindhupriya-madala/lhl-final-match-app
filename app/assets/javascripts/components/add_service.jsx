const AddService = (props) => {
    
  const updateProfile = (event) => {
  
    event.preventDefault()

    $.ajax({ 
      url: '/services/1', 
      type: 'POST', 
      data: { 
        user: current_user, 
        service: {hourly_rate, description},
        category: category
      }, 
      success: (data) => { 
        console.log('it worked!', response);
      } 
    });
  };

    return(
      <form>
        <div className="card large purple lighten-5">
          <div className="card-content black-text">
            <span className="card-title center pink-text lighten-1"><h3>Add Service</h3></span>
            <div className="row">
              <div className="input-field col s6 center">
                <select className="browser-default category">
                  <option value="" disabled selected>please select category</option>
                  <option value="painter"> Painter</option>
                  <option value="ac-repair"> ac-repair</option>
                  <option value="technician"> Technician</option>
                  <option value="carpenter"> Carpenter</option>
                  <option value="electrician"> Electrician</option>
                  <option value="cleaner"> Cleaner</option>
                  <option value="interior-designer">Interior-Designer</option>
                </select>       
              </div>
              <div className="input-field col s6 center">
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