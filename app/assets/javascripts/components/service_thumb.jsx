 const ServiceThumb = (props) => {
        //   const user = this.props.service.getUserByService(service.user_id);
  return(
        <div className='services-column col l3'>            
         <div className='card horizontal sticky-action hoverable'>
            <div className='card-image'>
              <Img className='card' src='sample1.jpg'/>
                <div className='card-button-container'>
                    <div className='card-action'>
                    <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.goToService}>Details
                        <i className="material-icons right">send</i>
                    </button>
                    </div>
                </div>
            </div>
           <div className='card-stacked'>
              <div className='card-content white-text'>
                <p className='card-title'>{user.name} </p>
                <div className='card-rating'>
                  <input className="star star-5" id="star-5" type="radio" name="star"/>
                  <i className="material-icons">star</i>
                  <input className="star star-4" id="star-4" type="radio" name="star"/>
                  <i className="material-icons">star</i>
                  <input className="star star-3" id="star-3" type="radio" name="star"/>
                  <i className="material-icons">star</i>
                  <input className="star star-2" id="star-2" type="radio" name="star"/>
                  <i className="material-icons">star</i>
                  <input className="star star-1" id="star-1" type="radio" name="star"/>
                  <i className="material-icons">star</i>
                  <p> Average Rating </p>
                </div>
                <span className='card-details'> Information about the expert </span>
             </div>
            </div>
         </div>
        </div>
    )
 }