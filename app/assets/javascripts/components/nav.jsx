const Nav = (props) => {
  return(
  <nav>
    <div className="nav-wrapper teal lighten-2 ">
      <a href="#" className="brand-logo">BuyHands</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href='#'>Category</a></li>
        <li><a href='#'>Settings</a></li>
        <li><a href='#'>Login | Signup</a></li>
      </ul>
    </div>
  </nav>
  )
}