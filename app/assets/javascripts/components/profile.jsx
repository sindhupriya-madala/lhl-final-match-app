class Profile extends React.Component{
  constructor(props) {
  super(props);
    this.state = {
      service : this.props.service,
      reviews : 'hello', //this.props.reviews,
      current_user: this.props.current_user
    }
  };
  render() {
  return(
    <div>
      <div className="row">
        <div className="col s12">
          <h1 className="orange-text"> Social Worker </h1>
          <div className="fixed-action-btn horizontal">
            <a className="btn-floating btn-large red">
              <i className="large material-icons">menu</i>
            </a>
            <ul>
              <li><a className="btn-floating red"><i className="material-icons">mode_edit</i></a></li>
              <li><a className="btn-floating teal darken-4"><i className="material-icons">delete</i></a></li>
            </ul>
          </div>
        </div>
        <div className="col s12 m6"><ServiceCard /></div>
      </div>
          <div className="row"><AllReviews /></div>
    </div> 
  )
  }
}