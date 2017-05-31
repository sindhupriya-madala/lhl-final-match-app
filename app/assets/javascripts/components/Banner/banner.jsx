class Banner extends React.Component{

	constructor(props) {
		super(props);
		this.state = {
			search : 'Painter'
		}
		this.changeSearch = this.changeSearch.bind(this);
	};

	componentDidMount() {
		$('.carousel.carousel-slider').carousel({fullWidth: true});

		setInterval(function(){
			$('.carousel').carousel('next');
		}, 5000);

	};

	changeSearch(e) {
		console.log("in change search", e.target.value);
		this.setState({search : e.target.value});
	};

	
  render() {
		return(
		<div id='banner-container' className='banner'>		
							<input className='searchbar' type='text' placeholder='enter search here' value={this.state.search} onChange={this.changeSearch.bind(this)}/>
							<button className="btn waves-effect" onClick = { event => this.props.onClickSearch(this.state.search) }> Search </button>
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
							<h1> Expert </h1>
							<p> Your one stop solution for Reliable Home Services </p>
						</div>
						<h2 className="searchbar-container">
						</h2>
							
					</div>

					{/*event => this.props.onClickSearch(value)*/}

  		</div>
		</div>

  )
	}
}