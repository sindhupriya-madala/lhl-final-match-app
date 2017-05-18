const LoginForm = (props) => {
  return(
  <div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6">
          <i className="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" className="validate" />
          <label for="icon_prefix">email</label>
        </div>
        <div className="input-field col s6">
          <i className="material-icons prefix">email</i>
          <input id="icon_email" type="email" className="validate" />
          <label for="icon_email">email</label>
        </div>
      </div>
    </form>
  </div>
  )
}