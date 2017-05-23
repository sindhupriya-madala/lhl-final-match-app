var NavBar = React.createClass({

  componentDidMount: function() {
    $(".button-collapse").sideNav();
  },
  render: function(){
    return(
      <nav>
        <div className="nav-wrapper">
          <a href="#!" className="brand-logo">Logo</a>
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