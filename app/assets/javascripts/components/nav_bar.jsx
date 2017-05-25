var NavBar = React.createClass({
  goToProfile(event){
		event.preventDefault()
		location.href = '/services'
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
            <li><a href="" >Messages</a></li>
            <li><a className="btn-floating deep-purple accent-1"><i className="material-icons">message</i></a></li>            
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="">Profile</a></li>
          </ul>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="">Profile</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="">Profile</a></li>
          </ul>
          
        </div>
      </nav>
    )
  }
})