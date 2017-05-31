class CategoriesTab extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
     categories : this.props.categories
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m1 l1"></div>
        <div className="col s12 m10 l10">
            <ul className="tabs">
              {this.state.categories.map( (category) => {      
                return(<li className="tab col s3 " key = {category.id} ><a href="" id={category.id} onClick = { event => this.props.onClickCategory(category.id)}>{category.name}</a></li> )
              })}
            </ul>
        </div>
        <div className="col s12 m1 l1"></div>
      </div>
    )
  }
}


  /*const CategoriesTab = ({categories}) => 
<div className="row">
  <div className="col s12 m1 l1"></div>
  <div className="col s12 m10 l10">
      <ul className="tabs">
        {categories.map( (category) => {      
          return(<li className="tab col s3"><a href="" onClick={}>{category.name}</a></li> )
        })}
      </ul>
  </div>
  <div className="col s12 m1 l1"></div>
</div>*/