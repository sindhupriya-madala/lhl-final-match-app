const DeleteService = (props) => {

  const delProfile = (event) => {
  
    event.preventDefault()

    $.ajax({ 
      url: '/services/1', 
      type: 'POST', 
      data: { 
        user : current_user
      }, 
      success: (data) => { 
        console.log('it worked!', response);
      } 
    });
  };

    return(
        <form>
        <div className="card small purple lighten-5 col s10">
          <div className="card-content black-text">
            <span className="card-title center pink-text lighten-1"><h3>Delete Profile</h3></span>
            <p className="active center">Are you sure! Do you want to delete your Account</p>
            <p className="active center">Press Delete button to delete your Account</p>
            <p className="active center">Cancel to cancel the action</p>
            <div className="card-action">
              <button className="btn waves-effect waves-light left" type="submit" name="action" onClick={this.delProfile}>Delete</button>
              <button className="btn waves-effect waves-light right" type="submit" name="action" >Cancel</button>
            </div>
          </div>
        </div>
      </form>
    )
}