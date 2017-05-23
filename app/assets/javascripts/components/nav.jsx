const Nav = (props) => {

  return(
  <nav>
    <div className="nav-wrapper teal lighten-2 ">
      <a href="#" className="brand-logo">BuyHands</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href='#'>Category</a></li>
        <li><a href='#'>Settings</a></li>
        { !props.current_user ? [
          <span>
        <li>
            <a href= '/login'>Login</a>
        </li>
        <li>
            <a href= 'sessions/new'>Signup</a>
        </li>
        </span>
        ] : [
          <li>
            <a href= '/logout'>Logout</a>
        </li>
        ] }
      </ul>
    </div>
  </nav>
  )
}