class Categories extends React.Component{  
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.categories
    }
  };

  render() {
    const categories = this.props.categories.map((category) => {
      return(
          <div className='card' key={category.id} >
            <div className='card-content white-text'>
              <span className='card-title center-align' id={category.id} onClick = { event => this.props.onClickCategory(category.id)}> {category.name} </span>
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