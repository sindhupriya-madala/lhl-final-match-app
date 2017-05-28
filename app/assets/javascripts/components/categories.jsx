class Categories extends React.Component{  
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.categories
    }
    this.handleCategoryClick = this.handleCategoryClick.bind(this);
  };

  handleCategoryClick(event){
    var {id} = event.target;
    console.log("selected value is:", id);
    $.ajax({ 
      url: '/services', 
      type: 'GET', 
      data: { 
        id: id 
      }, 
      success: (service) => { 
        console.log('it worked!', service);
      } 
    });
  }

  render() {
    const categories = this.props.categories.map((category) => {
      return(
          <div className='card'>
            <div className='card-content white-text'>
              <span className='card-title center-align' id={category.id} onClick={this.handleCategoryClick}> {category.name} </span>
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