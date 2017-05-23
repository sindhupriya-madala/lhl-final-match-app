class ReviewMessageCard extends React.Component{

  constructor(props) {
    super(props);
    this.handleReview = this.handleReview.bind(this);
    this.handleMessage =  this.handleMessage.bind(this);
  }

  handleReview(event) {
    const content = this.refs.content.value;
    const rating = this.refs.rating.value;
    $.ajax({ 
      url: '/reviews', 
      type: 'POST', 
      data: { 
        review: {content: content, rating: rating} 
      }, 
      success: (review) => { 
        console.log('it worked!', response);
        this.props.newReview(review); 
      } 
    });
  };

  handleMessage(event) {
    const content = this.refs.content.value;
    const rating = this.refs.rating.value;
    $.ajax({ 
      url: '/messages/new', 
      type: 'POST', 
      data: { 
        item: {content: content } 
      }, 
      success: (response) => { 
        console.log('it worked!', response); 
      } 
    });
  };

  render() {
    return(
      <div className="card">
        <div className="card-content">
          <div class="input-field col s12">
            <textarea id="textarea1" class="materialize-textarea" ref='content'></textarea>            
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
    )
  }
}
