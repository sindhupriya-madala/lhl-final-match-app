class DeleteService extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.service[0].id,
    };
    this.delProfile = this.delProfile.bind(this);
    console.log("service is:", this.props.service[0]);
  } 

   delProfile(event){
    // event.preventDefault()
    $.ajax({ 
      url: `/services/${this.state.id}`, 
      type: 'DELETE', 
      success: (data) => { 
        console.log('it worked!', data);
      } 
    });
  };

  render() {
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
}