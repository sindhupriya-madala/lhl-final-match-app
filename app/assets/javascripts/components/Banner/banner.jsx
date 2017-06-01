class Banner extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			search : ''
		}
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	};

	componentDidMount() {
		event.preventDefault();
		$('.carousel.carousel-slider').carousel({fullWidth: true});
		setInterval(function(){
			$('.carousel').carousel('next');
		}, 5000);

		// auto focus search bar
		this.nameInput.focus();

		// click on carousel to focus search bar
		$( "#banner-container" ).click(function() {
			$( ".searchbar" ).focus();
		});

	}

		handleSearchSubmit(e) {
			this.setState({search : e.target.value});
				if(e.keyCode == 13){
				this.props.onClickSearch(this.state.search);
			};
		}

	
  render() {
		return(
		<div id='banner-container' className='banner'>		
		  <div className="carousel carousel-slider center" data-indicators="true">
			<div className='banner-overlay'>
				<a className="carousel-item">
					<Img src='banner-hall.png'/>
				</a>
			
				<a className="carousel-item">
					<Img src='banner-electrician.jpg'/>
				</a>

				<a className="carousel-item">
					<Img src='banner-carpenter.jpg'/>
				</a>

				<a className="carousel-item">
					<Img src='banner-painter.jpg'/>
				</a>

				</div>
					<div className="carousel-fixed-item center">
						<div className='banner-content'>
							<h1> BluCollar </h1>
							<p> Your one stop solution for Reliable Home Services </p>
						</div>
						<h2 className="searchbar-container">
							<input 
								className='searchbar' type='text' 
								ref={(input) => {this.nameInput = input;}} 
								placeholder='enter search here' 
								value={this.state.search} 
								onChange={this.handleSearchSubmit}
								onKeyUp = {this.handleSearchSubmit}
								/>
							<button 
								className="btn waves-effect" 
								onClick = { event => this.props.onClickSearch(this.state.search) }> 
								Search 
							</button>
						</h2>
							
					</div>

  		</div>
		</div>

  )
	}
}