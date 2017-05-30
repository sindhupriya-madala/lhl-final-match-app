 const ServiceThumb = ({service}) => {

  const goToService = (e) => {
    e.preventDefault()
    location.href = `/services/${service.user_id}`
  } 

  return(
    <div className="col s12 m4 l4">
      <div className="card horizontal">
        <div className="card-image">
          <Img src="sample1.jpg" />
          <h5> name </h5>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.</p>
          </div>
          <div className="card-action">
            <a href="#">details</a>
          </div>
        </div>
      </div>
    </div>
  )
 } 