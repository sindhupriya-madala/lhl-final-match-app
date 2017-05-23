const About = (props) => {
  return(

    <div className='about-container'>

      <div className='tabs-container'>
        <div className='row'>
          <div className='col s12'>
              <ul className='tabs'>
                <li className="tab col s3"><a href="#test1">Getting Started</a></li>
                <li className="tab col s3"><a className="active" href="#test2">Benefits</a></li> 
                <li className="tab col s3"><a href="#test3">About Us</a></li>
              </ul>
          </div>
        </div>
      </div>

      <div className="row center">

        <div className="col s4">
          <div className='about-1'>
            <i className="large material-icons">person_pin</i>
            <p className='about-title'>About Title 1</p>
            <p className='about-content'>About content 1</p>
          </div>
        </div>

        <div className="col s4">
          <div className='about-1'>
            <i className="large material-icons">schedule</i>
            <p className='about-title'>About Title 2</p>
            <p className='about-content'>About content 2</p>
          </div>
        </div>

        <div className="col s4">
          <div className='about-1'>
            <i className="large material-icons">stars</i>
            <p className='about-title'>About Title 3</p>
            <p className='about-content'>About content 3</p>
          </div>
        </div>
      

      </div>
    </div>
          
  )
}