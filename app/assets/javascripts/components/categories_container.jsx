class Categories extends React.Component{  
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.categories
    }
    this.openCategory = this.openCategory.bind(this);
  };

  openCategory(event){
    var {id} = event.target;
    console.log("selected value is:",id);
    $.ajax({ 
      url: '/services', 
      type: 'GET', 
      data: { 
        id: id 
      }, 
      success: (review) => { 
        console.log('it worked!', review);
      } 
    });
  }

  render() {
    const categories = this.props.categories.map((category) => {
      return(
          <div className='card' key={category.id} >
            <div className='card-content white-text'>
              <span className='card-title center-align' onClick={this.openCategory}> {category.name} </span>
            </div>
          </div>
      )
    });
    
    return (
      <div id='category-container' className='categories-column col l2'>
        {categories}
      </div>
    )
  }
}

{/*//     return(
// 			<div id='category-container' className='categories-column col l2'>
				
// 				<div className='card'>
// 					<div className='card-content white-text'>
// 						<span className='card-title center-align'> All </span>
// 					</div>
// 				</div>

// 				<div className='card'>
// 					<div className='card-content white-text'>
// 						<span className='card-title center-align'> Painter </span>
// 					</div>
// 				</div>

// 				<div className='card'>
// 					<div className='card-content white-text'>
// 						<span className='card-title center-align'> AC Repair </span>
// 					</div>
// 				</div>
				
// 					<div className='card'>
// 					<div className='card-content white-text'>
// 						<span className='card-title center-align'> Technician </span>
// 					</div>
// 				</div>

// 					<div className='card'>
// 					<div className='card-content white-text'>
// 						<span className='card-title center-align'> Carpenter </span>
// 					</div>
// 				</div>

// 					<div className='card'>
// 					<div className='card-content white-text'>
// 						<span className='card-title center-align'> Electrician </span>
// 					</div>
// 				</div>

// 				<div className='card'>
// 					<div className='card-content white-text'>
// 						<span className='card-title center-align'> Cleaner </span>
// 					</div>
// 				</div>

// 				<div className='card'>
// 					<div className='card-content white-text'>
// 						<span className='card-title center-align'> Interior Design </span>
// 					</div>
// 				</div>

// 			</div>
//   )
// }*/}
