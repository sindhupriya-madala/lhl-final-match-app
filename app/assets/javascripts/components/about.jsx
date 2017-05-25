const About = (props) => {
  return(

    <div id='about-container' className='grey lighten-3'>


      <div className='tabs-container'>
        <div className='row'>
          <div className='col s12'>
              <ul className='tabs grey lighten-3'>
                <li className="tab col s3"><a href="#gettingstarted" onClick=''>Getting Started</a></li>
                <li className="tab col s3"><a className='active' href="#benefits">Benefits</a></li> 
                <li className="tab col s3"><a href="#aboutus">About Us</a></li>
              </ul>
          </div>
        </div>
      </div>

      <div id='gettingstarted' className='gettingstarted-container'>
        <div className='gettingstarted-content'>
          <h3> It's Easy! </h3>
          <ul>
            <li> 1. Choose a category. </li>
            <li> 2. Pick an Expert. </li>
            <li> 3. View details and book an appointment.</li>
          </ul>
        </div>
      </div>

      <div id='benefits' className='benefits-container'>
        <div className="row center">

          <div className="col s4">
            <div className='benefit-1'>
              <i className="large material-icons">person_pin</i>
              <p className='about-title'><strong>Personalized</strong></p>
              <p className='about-content'>One-on-one live chat sessions with an Expert</p>
            </div>
          </div>

          <div className="col s4">
            <div className='benefit-2'>
              <i className="large material-icons">schedule</i>
              <p className='about-title'><strong>Quick</strong></p>
              <p className='about-content'>Recieve responses to each of your requests promptly</p>
            </div>
          </div>

          <div className="col s4">
            <div className='benefit-3'>
              <i className="large material-icons">stars</i>
              <p className='about-title'><strong>Informative</strong></p>
              <p className='about-content'>Read and leave reviews for each Expert</p>
            </div>
          </div>
      
        </div>
      </div>

      <div id='aboutus' className='aboutus-container'>
        <div className='aboutus-content'>
          
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
            veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?
          
        </div>
      </div>

    </div>
          
  )
}