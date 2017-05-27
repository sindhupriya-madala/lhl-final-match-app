class MyProfile extends React.Component{
  constructor(props) {
  super(props);
    this.state = {
      service : this.props.service,
      reviews : 'hello', //this.props.reviews,
      current_user: this.props.current_user,
      categories: this.props.categories,
      show_edit : false,
      show_delete : false,
      show_add : false
    }
    this.updatedProfile = this.updatedProfile.bind(this);
  };
  
  addProfile() {
    if(this.show_delete != 'false' ) {
      this.setState({show_delete: false})
    }
    if(this.show_edit != 'false') {
      this.setState({show_edit: false})
    }
    this.setState(prevState => ({
      show_add: !prevState.show_add
    }));
  };

  editProfile() {
    if(this.show_delete != 'false') {
      this.setState({show_delete: false})
    }
    if(this.show_add != 'false') {
      this.setState({show_add: false})
    }
    this.setState(prevState => ({
      show_edit: !prevState.show_edit
    }));
  };

  updatedProfile(data) {
    this.setState({service : data.service, current_user : data.user})
  };

  deleteProfile() {
    if(this.show_edit != 'false') {
      this.setState({show_edit: false})
    }
    if(this.show_add != 'false') {
      this.setState({show_add: false})
    }
    this.setState(prevState => ({
      show_delete: !prevState.show_delete
    }));
  };

  render() {
    const editDiv = (this.state.show_edit)?<EditService /> : ''
    const deleteDiv = (this.state.show_delete)?<DeleteService /> : ''
    const addDiv = (this.state.show_add)?<AddService categories = {this.state.categories}/> : ''
    return(
      <div>
        <div className="row">
          <div className="col s12">
            <h2 className="orange-text center"> Social Worker </h2>
            <div className="fixed-action-btn horizontal">
              <a className="btn-floating btn-large red">
                <i className="large material-icons">menu</i>
              </a>
              <ul>
                <li>
                  <a className="btn-floating red">
                    <i className="material-icons" onClick={() => {this.editProfile();}}>mode_edit</i>
                  </a>
                </li>
                <li>
                  <a className="btn-floating teal darken-4">
                    <i className="material-icons" onClick={() => {this.deleteProfile();}}>delete</i>
                  </a>
                </li>
                <li>
                  <a className="btn-floating teal darken-4">
                    <i className="material-icons" onClick={() => {this.addProfile();}}>add</i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col s12 m6"><ServiceCard /></div>
          <div className="col s12 m6">{editDiv}</div>
          <div className="col s12 m6">{deleteDiv}</div>
          <div className="col s12 m6">{addDiv}</div>
        </div>
            <div className="row"><AllReviews /></div>
      </div> 
    )
    }
  }