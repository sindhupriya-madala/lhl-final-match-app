const Categories = React.createClass({
	// constructor(props) {
	// 	super(props);
	// 	this.state = {
	// 		categories : this.props.categories
	// 	}
	// };
	showServices() {
		event.preventDefault();
		location.href = '/categories/1/services'
	},

  render: function() {
		return(
			<div id='category-container' className='categories-column col l2'>
				
				<div className='card'>
					<div className='card-content white-text'>
						<span className='card-title center-align' onClick={this.showServices}> All </span>
					</div>
				</div>

				<div className='card'>
					<div className='card-content white-text'>
						<span className='card-title center-align'> Painter </span>
					</div>
				</div>

				<div className='card'>
					<div className='card-content white-text'>
						<span className='card-title center-align'> AC Repair </span>
					</div>
				</div>
				
					<div className='card'>
					<div className='card-content white-text'>
						<span className='card-title center-align'> Technician </span>
					</div>
				</div>

					<div className='card'>
					<div className='card-content white-text'>
						<span className='card-title center-align'> Carpenter </span>
					</div>
				</div>

					<div className='card'>
					<div className='card-content white-text'>
						<span className='card-title center-align'> Electrician </span>
					</div>
				</div>

			</div>
  	)
	}
})