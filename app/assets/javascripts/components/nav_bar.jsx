var NavBar = React.createClass({

  componentDidMount: function() {
    $(".button-collapse").sideNav();
  },
  render: function(){
    return(
      <nav>
        <div className="nav-wrapper blue darken-2 ">
          <a href="#" className="brand-logo">Expert</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href='#'>Category</a></li>
            <li><a href='#'>Profile</a></li>
          </ul>
        </div>
      </nav>
    )
  }
})