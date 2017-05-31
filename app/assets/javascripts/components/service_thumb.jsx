 const ServiceThumb = ({service}) => {
  const avatar_url = service.avatar ? `user/avatar/${service.user_id}/${service.avatar}` : `fallback/default-avatar.jpeg`
  const goToService = (e) => {
    e.preventDefault()
    location.href = `/services/${service.user_id}`
  } 
  console.log("service in service thumb is :", service);
  return(
    <div className="col s12 m4 l4">
      <div className="card horizontal teal accent-1">
        <div className="card-image">
          <Img src={avatar_url} />
          <h6 className="pink-text accent-1">{service.first_name} {service.last_name}  </h6>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p className="blue-text">Hourly Rate : {service.hourly_rate}</p>
          </div>
          <div className="card-content blue-text">
            <p>Rating : 3.5</p>
          </div>
          <div className="card-action">
            <a href="#" onClick={goToService}>details</a>
          </div>
        </div>
      </div>
    </div>
  )
 } 