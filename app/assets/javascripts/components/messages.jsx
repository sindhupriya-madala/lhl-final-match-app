// const Messages = React.createClass({
class Messages extends React.Component{  
  constructor(props) {
    super(props);
    console.log("messages :", this.props.messages);
    this.state = {
      messages: this.props.messages,
      reply: false,
      content: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.sendReply = this.sendReply.bind(this);
    this.deleteMessage = this.deleteMessage.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  };

  handleMessage(event) {
    this.setState({content: event.target.value});
    console.log('=================',event.target.value);
  }

  handleChange() {
    this.setState({
      reply: !this.state.reply
    })
    console.log(this.state.reply);
  };

  sendReply(event) {
    const content = this.refs.content.value;
    console.log("refs is:", this.refs.content);
    console.log("content is:", content);
    console.log("receiver user is", event.target.id);
    $.ajax({ 
      url: '/messages', 
      type: 'POST', 
      data: { 
        content: this.state.content,
        receiver_user_id: event.target.id
      }, 
      success: (response) => { 
        console.log('it worked!', response); 
      } 
    });
  };

  deleteMessage(event) {
    console.log("message id is : ", event.target.id)
    $.ajax({ 
      url: `/messages/${event.target.id}`, 
      type: 'DELETE', 
      success: (data) => { 
        console.log('it worked!', data);
      } 
    });
  }

  render() {
    
    console.log("messages :", this.props.messages);
    
    const messages = this.props.messages.map((message) => {
      var date = ((new Date(message.created_at)).toString()).slice(0, 16);  
      var today = (new Date().toString()).slice(0, 16); 
      const replymsg = this.state.reply 
      ? <div>
          <div className="input-field col s12">
            <textarea id="textarea1" className="materialize-textarea" ref='content' onChange={this.handleMessage}></textarea>            
          </div>  
          <a className="btn-floating btn waves-effect waves-light blue right" onClick={this.sendReply}>
            <i className="material-icons" id={message.sender_user_id}>send</i>
          </a>
        </div>
      : '';      
      return(
        <li key={message.id}>
          <div className="collapsible-header brown lighten-5"> 
            <span className={ (today == date)? "new badge": "badge"}></span>
            <i className="material-icons">place</i>
            {message.first_name} {message.last_name}
          </div>
          <div className="collapsible-body row" id={message.id} ref='receiver_id'>
            <p className="col s12">{message.content}</p> 
            <p className="col s10">{date}</p>
            <a className="btn-floating btn waves-effect waves-light orange left" onClick={this.handleChange}><i className="material-icons">replay</i></a>
            <a className="btn-floating btn waves-effect waves-light red right" onClick={this.deleteMessage}><i id={message.id} className="material-icons">delete</i></a>
              { replymsg }
          </div>          
        </li>  
      )
    });
    
    return (
      <div>
        <h3 className="orange-text center">Inbox</h3> 
        <div className='notification-container'>
          <ul className="collapsible" data-collapsible="accordion">
            {messages}
          </ul>
        </div>
      </div>
    )
  }
}


