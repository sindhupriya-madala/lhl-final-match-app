const ServiceCardList = (props) => {
	const goToService = (event) => {
		event.preventDefault()
		location.href = 'services/1'
	};
  return(
		<div id='services-container' className='row'>

			<div className='services-column col l3 hoverable'>			
				<div className='card horizontal sticky-action'>
					<div className='card-image'>
						<Img className='card activator' src='sample1.jpg'/>
						<span className = 'card-name activator'> Services Name 1 </span>
						<div className='card-action'>
							<button className="btn waves-effect waves-light" type="submit" name="action" onClick={goToService}>Details
								<i className="material-icons right">send</i>
							</button>
						</div>
					</div>

					<div className='card-stacked'>
						<div className='card-content white-text'>
							<p className='card-title'> Name 1 </p>
							<span className='card-details'> Information about the expert </span>
						</div>
					</div>

					<div className='card-reveal'>
						<span className='card-title'>Card Title<i className='material-icons right'>list</i></span>
						<p> extra info here </p>
					</div>

				</div>
			</div>

		</div>
  )
}