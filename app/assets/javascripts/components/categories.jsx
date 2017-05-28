class Categories extends React.Component{  
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.categories
    }
    this.openCategory = this.openCategory.bind(this);
  };

  openCategory(event){
    var id = event.target.id;
    console.log("selected value is:",id);
    $.ajax({ 
      url: `categories/${id}`, 
      type: 'GET', 
      success: (review) => { 
        // console.log('it worked!', review);
      } 
    });
  }

  render() {
    const categories = this.props.categories.map((category) => {
      console.log(category.id);
      return(
          <div className='card' key={category.id} >
            <div className='card-content white-text'>
              <span className='card-title center-align' id={category.id} onClick={this.openCategory}> {category.name} </span>
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