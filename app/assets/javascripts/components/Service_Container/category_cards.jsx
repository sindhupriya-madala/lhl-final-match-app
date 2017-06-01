class CategoryCards extends React.Component{

    render(){
      console.log("category service controller:",this.props.services);
      return(
        <div id='categoryService-container'> 
          <div className='row'>
            <Categories categories={this.props.categories} onClickCategory={this.props.onClickCategory}/>
            <ServiceCardList services={this.props.services} />     
          </div>
        </div>
      )
    }
}