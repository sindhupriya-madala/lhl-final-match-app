var Banner = React.createClass({

	componentDidMount: function() {
		$('.carousel.carousel-slider').carousel({fullWidth: true});

		setInterval(function(){
			$('.carousel').carousel('next');
		}, 5000);

	},

	
  render: function() {
		return(
		<div id='banner-container' className='banner'>		
		  <div className="carousel carousel-slider center" data-indicators="true">

				<a className="carousel-item" href="#one!">
					<Img src='banner-hall.png'/>
					<div className="carousel-fixed-item center">
						<h2 className="carousel-content">This is your first panel</h2>
						<a className="btn waves-effect white black-text darken-text-2">Browse Cleaners</a>
					</div>
				</a>
			
				<a className="carousel-item">
					<Img src='banner-electrician.jpg'/>
					<div className="carousel-fixed-item center">
						<h2 className="carousel-content">This is your second panel</h2>
						<a className="btn waves-effect white grey-text darken-text-2">button</a>
					</div>
				</a>

				<a className="carousel-item">
					<Img src='banner-carpenter.jpg'/>
					<div className="carousel-fixed-item center">
						<h2 className="carousel-content">This is your third panel</h2>
						<a className="btn waves-effect white grey-text darken-text-2">button</a>
					</div>
				</a>

				<a className="carousel-item">
					<Img src='banner-painter.jpg'/>
					<div className="carousel-fixed-item center">
						<h2 className="carousel-content">This is your fourth panel</h2>
						<a className="btn waves-effect white grey-text darken-text-2">button</a>
					</div>
				</a>

  		</div>
		</div>

  )
	}
})