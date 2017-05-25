// const Messages = React.createClass({
class Messages extends React.Component{  
  constructor(props) {
    super(props);
    console.log("mesages :", this.props.messages);
    this.state = {
      
      messages: this.props.messages
    }
  };
  render() {
    console.log("mesages :", this.props.messages);
    const messages = this.props.messages.map((message) => {
      return(
       <li>
          <div className="collapsible-header"><span className="badge">{message.id}</span><i className="material-icons">place</i>{message.first_name}</div>
          <div className="collapsible-body"><p>{message.content}</p></div>
      </li>  
      )
    });
    return (
      <div>
        <h1> Hello From MessageList</h1> 
        <div className='notification-container'>
          <ul className="collapsible" data-collapsible="accordion">
            <li>
              <div className="collapsible-header"><span className="new badge"></span><i className="material-icons">filter_drama</i>First</div>
              <div className="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
            </li>
            {messages}
          </ul>
        </div>
      </div>
    )
  }
}


