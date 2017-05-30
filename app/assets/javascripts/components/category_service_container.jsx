class CategoryService extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            categories: this.props.categories,
            services: this.props.services
        }
        this.onClickCategory = this.onClickCategory.bind(this);
    }
    onClickCategory() {
      console.log("clicked one category");
    }
    render(){
      console.log("category service controller:",this.props.services);
      return(
        <div id='categoryService-container'> 
          <CategoriesTab categories={this.state.categories}/>
          <div className='row'>
            <ServiceCardList services={this.state.services} />     
          </div>
        </div>
      )
    }
}
