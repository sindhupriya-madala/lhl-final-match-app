// import logo from './sample1.jpg'
const ServiceCard = (props) => {
  return(
		<div className="row">
			<div className="">
				<div className="card">
					<div className="card-image row">
						<Img src="sample1.jpg" alt="obama" height={250} className="col s6"/>
						<span className="card-title pink-text">Name</span>
					</div>
					<div className="card-content">
						<p>I am a very simple card. I am good at containing small bits of information.
							I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.
							I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.
							I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.
							I am convenient because I require little markup to use effectively.I am a very simple card. I am good at containing small bits of information.
							I am convenient because I require little markup to use effectively.</p>
					</div>
					<div className="card-action row">
						<div className="col s6 center-align">	
							<a href="#">Average Rating</a>	
							<label>from 1 to 5</label>
						</div>
						<div className="col s6 center-align">
							<a href='#'>Hoverly Rate</a>
							<label>$ 15.00</label>
						</div>
					</div>
          <div>  
						<a className="waves-effect waves-light btn right" >Book Service</a>
					</div>
				</div>
			</div>
		</div>
  )
}
