var NavBar = React.createClass({
  goToProfile(event){
		event.preventDefault()
		location.href = '/services/1'
	},
  goToMessages(event){
		event.preventDefault()
		location.href = '/messages/1'
	},
  componentDidMount: function() {
    $(".button-collapse").sideNav();
  },
  render: function(){
    return(
      <nav>
        <div className="nav-wrapper blue darken-2 ">
          <a href="#" className="brand-logo">Expert</a>
           <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
           <ul className="right hide-on-med-and-down">
             <li><a href="" onClick={this.goToProfile}>Profile</a></li>
             <li><a href="" >Add Service</a></li>
             <li><a className="btn-floating deep-purple accent-1" onClick={this.goToMessages}><i className="material-icons">message</i></a></li>
             
           </ul>
           <ul className="side-nav" id="mobile-demo">
             <li><a href="">Profile</a></li>
          </ul>
        </div>
      </nav>
    )
  }
})