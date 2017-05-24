const ServiceCardList = (props) => {
	const goToService = (event) => {
		event.preventDefault()
		location.href = '/services/1'
	};
  return(
		<div id='services-container' className='row grey lighten-3'>

			<div className='services-column col l3 hoverable'>			
				<div className='card horizontal sticky-action'>
					<div className='card-image'>
						<img className='card activator'/>
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


			<div className='services-column col l3'>			
				<div className='card blue-grey lighten-1 horizontal sticky-action'>
					<div className='card-image activator'>
						<img/>
						<span className = 'card-name'> Services Name 1 </span>
					</div>
					<div className='card-stacked'>
						<div className='card-content white-text'>
							<p className='card-title'> Name 1 </p>
							<span className='card-details'> Information about the expert </span>
						</div>
						<div className='card-action'>
							<a className='btn-floating right fab waves-effect waves-light red z-depth-5'><i className='material-icons'>add</i></a>
						</div>
					</div>
					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>Card Title<i className='material-icons right'>list</i></span>
							<p> extra info here </p>
					</div>
				</div>
			</div>

			<div className='services-column col l3'>			
				<div className='card blue-grey lighten-1 horizontal sticky-action'>
					<div className='card-image activator'>
						<img/>
						<span className = 'card-name'> Services Name 1 </span>
					</div>
					<div className='card-stacked'>
						<div className='card-content white-text'>
							<p className='card-title'> Name 1 </p>
							<span className='card-details'> Information about the expert </span>
						</div>
						<div className='card-action'>
							<a className='btn-floating right fab waves-effect waves-light red z-depth-5'><i className='material-icons'>add</i></a>
						</div>
					</div>
					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>Card Title<i className='material-icons right'>list</i></span>
							<p> extra info here </p>
					</div>
				</div>
			</div>

					<div className='services-column col l3'>			
				<div className='card blue-grey lighten-1 horizontal sticky-action'>
					<div className='card-image activator'>
						<img/>
						<span className = 'card-name'> Services Name 1 </span>
					</div>
					<div className='card-stacked'>
						<div className='card-content white-text'>
							<p className='card-title'> Name 1 </p>
							<span className='card-details'> Information about the expert </span>
						</div>
						<div className='card-action'>
							<a className='btn-floating right fab waves-effect waves-light red z-depth-5'><i className='material-icons'>add</i></a>
						</div>
					</div>
					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>Card Title<i className='material-icons right'>list</i></span>
							<p> extra info here </p>
					</div>
				</div>
			</div>

					<div className='services-column col l3'>			
				<div className='card blue-grey lighten-1 horizontal sticky-action'>
					<div className='card-image activator'>
						<img/>
						<span className = 'card-name'> Services Name 1 </span>
					</div>
					<div className='card-stacked'>
						<div className='card-content white-text'>
							<p className='card-title'> Name 1 </p>
							<span className='card-details'> Information about the expert </span>
						</div>
						<div className='card-action'>
							<a className='btn-floating right fab waves-effect waves-light red z-depth-5'><i className='material-icons'>add</i></a>
						</div>
					</div>
					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>Card Title<i className='material-icons right'>list</i></span>
							<p> extra info here </p>
					</div>
				</div>
			</div>

					<div className='services-column col l3'>			
				<div className='card blue-grey lighten-1 horizontal sticky-action'>
					<div className='card-image activator'>
						<img/>
						<span className = 'card-name'> Services Name 1 </span>
					</div>
					<div className='card-stacked'>
						<div className='card-content white-text'>
							<p className='card-title'> Name 1 </p>
							<span className='card-details'> Information about the expert </span>
						</div>
						<div className='card-action'>
							<a className='btn-floating right fab waves-effect waves-light red z-depth-5'><i className='material-icons'>add</i></a>
						</div>
					</div>
					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>Card Title<i className='material-icons right'>list</i></span>
							<p> extra info here </p>
					</div>
				</div>
			</div>

					<div className='services-column col l3'>			
				<div className='card blue-grey lighten-1 horizontal sticky-action'>
					<div className='card-image activator'>
						<img/>
						<span className = 'card-name'> Services Name 1 </span>
					</div>
					<div className='card-stacked'>
						<div className='card-content white-text'>
							<p className='card-title'> Name 1 </p>
							<span className='card-details'> Information about the expert </span>
						</div>
						<div className='card-action'>
							<a className='btn-floating right fab waves-effect waves-light red z-depth-5'><i className='material-icons'>add</i></a>
						</div>
					</div>
					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>Card Title<i className='material-icons right'>list</i></span>
							<p> extra info here </p>
					</div>
				</div>
			</div>

					<div className='services-column col l3'>			
				<div className='card blue-grey lighten-1 horizontal sticky-action'>
					<div className='card-image activator'>
						<img/>
						<span className = 'card-name'> Services Name 1 </span>
					</div>
					<div className='card-stacked'>
						<div className='card-content white-text'>
							<p className='card-title'> Name 1 </p>
							<span className='card-details'> Information about the expert </span>
						</div>
						<div className='card-action'>
							<a className='btn-floating right fab waves-effect waves-light red z-depth-5'><i className='material-icons'>add</i></a>
						</div>
					</div>
					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>Card Title<i className='material-icons right'>list</i></span>
							<p> extra info here </p>
					</div>
				</div>
			</div>

					<div className='services-column col l3'>			
				<div className='card blue-grey lighten-1 horizontal sticky-action'>
					<div className='card-image activator'>
						<img/>
						<span className = 'card-name'> Services Name 1 </span>
					</div>
					<div className='card-stacked'>
						<div className='card-content white-text'>
							<p className='card-title'> Name 1 </p>
							<span className='card-details'> Information about the expert </span>
						</div>
						<div className='card-action'>
							<a className='btn-floating right fab waves-effect waves-light red z-depth-5'><i className='material-icons'>add</i></a>
						</div>
					</div>
					<div className='card-reveal'>
						<span className='card-title grey-text text-darken-4'>Card Title<i className='material-icons right'>list</i></span>
							<p> extra info here </p>
					</div>
				</div>
			</div>



		</div>
  )
}