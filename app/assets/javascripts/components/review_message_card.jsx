class ReviewMessageCard extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      user : this.props.user,
      service : this.props.service,
      current_user : this.props.current_user
    }
    this.handleReview = this.handleReview.bind(this);
    this.handleMessage =  this.handleMessage.bind(this);
  }

  handleReview(event) {
    const description = this.refs.content.value;
    const rating = this.refs.rating.value;
    $.ajax({ 
      url: `/services/${this.state.service.id}/reviews`, 
      type: 'POST', 
      data: { 
        review: { description: description, 
                  rating: rating, 
                  user_id: this.state.service.user_id,
                  service_id: this.state.service.id
                } 
      }, 
      success: (review) => { 
        console.log('it worked!', review);
        // this.props.newReview(review); 
      } 
    });
  };

  handleMessage(event) {
    const content = this.refs.content.value;
    console.log("receiver user is", this.state.user);
    $.ajax({ 
      url: '/messages', 
      type: 'POST', 
      data: { 
        content: content,
        receiver_user_id: this.state.user.id
      }, 
      success: (response) => { 
        console.log('it worked!', response); 
      } 
    });
  };

  render() {
    return(
      <form>
        <div className="card">
          <div className="card-content">
            <div className="input-field col s12">
              <textarea id="textarea1" className="materialize-textarea" ref='content'></textarea>            
            </div>
          </div>
          <div className="card-tabs">
            <ul className="tabs tabs-fixed-width">
              <li className="tab"><a className="active" href="#review">Review</a></li>
              <li className="tab"><a href="#message">Message</a></li>
            </ul>
          </div>
          <div className="card-content grey lighten-4">
            <div id="review" className="row">                      
                <select className="browser-default col s6" ref='rating'>
                  <option value="" disabled selected>Rating</option>
                  <option value="0"> 0</option>
                  <option value="1"> 1</option>
                  <option value="2"> 2</option>
                  <option value="3"> 3</option>
                  <option value="3"> 4</option>
                  <option value="3"> 5</option>
                </select>       
              <a className="waves-effect waves-red btn col s4 right" onClick={this.handleReview}>Submit Review</a>
            </div>
            <div id="message"><a className="waves-effect waves-red btn" onClick={this.handleMessage}>Send Message</a></div>
          </div>
        </div>
      </form>
    )
  }
}
