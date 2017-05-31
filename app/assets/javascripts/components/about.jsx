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
        <div className="row center">
          <div className='gettingstarted-content '>
            <div className='col s6 right-align'>
              <h3> It's Easy! </h3>
            </div>
            <div className='col s6 left-align'>
              <ol>
                <li> Choose a category. </li>
                <li> Pick an Expert. </li>
                <li> View details and book an appointment.</li>
              </ol>
            </div>
          </div>
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
            <p>
              This App was built using PostgreSql, Rails, AJAX, JQuery, React, Materialize, CSS, SASS
              and Devise Authentication. <br/>
              <u>Team Members:</u> Alvin Shih, Sean Park and Sindhupriya Madala. <br/> 
              You can find the source code 
              <a href="https://github.com/laughnpeas/lhl-final-match-app"> here on GitHub. </a>
            </p>       
        </div>
      </div>

    </div>
          
  )
}