const ServiceThumb = ({service}) => {
  const avatar_url = service.avatar ? `user/avatar/${service.user_id}/medium_avatar.jpg` : `fallback/default-avatar.jpeg`
  const goToService = (e) => {
    e.preventDefault()
    location.href = `/services/${service.user_id}`
  } 

  return(
    <div className='services-column col l3'>
      <div className='card horizontal sticky-action hoverable'>
        <div className='card-image'>
          <Img className='card' src={avatar_url}/>
            <div className='card-button-container'>
                <div className='card-action'>
                <button className="btn waves-effect waves-light" type="submit" name="action" onClick={goToService}>Details
                    <i className="material-icons right">send</i>
                </button>
                </div>
            </div>
        </div>
        <div className='card-stacked'>
          <div className='card-content black-text'>
            <p className='card-title'> {service.first_name} {service.last_name} </p>
            {/*<div className='card-rating'>*/}
              {/*<input className="star star-5" id="star-5" type="radio" name="star"/>
              <i className="material-icons">star</i>
              <input className="star star-4" id="star-4" type="radio" name="star"/>
              <i className="material-icons">star</i>
              <input className="star star-3" id="star-3" type="radio" name="star"/>
              <i className="material-icons">star</i>
              <input className="star star-2" id="star-2" type="radio" name="star"/>
              <i className="material-icons">star</i>
              <input className="star star-1" id="star-1" type="radio" name="star"/>
              <i className="material-icons">star</i>*/}
            {/*</div>*/} 
              <div className="card-content">
                <p>Rating : 3.5</p>
                <p> Hourly Rate: ${service.hourly_rate}</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
 } 