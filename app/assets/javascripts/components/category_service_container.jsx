class CategoryService extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            categories: this.props.categories,
            services: this.props.services
        }
        this.onClickCategory = this.onClickCategory.bind(this);
    }
    onClickCategory(id) {
      $.ajax({ 
        url: `/categories/${id}.json`, 
        type: 'GET', 
        success: (services) => { 
          console.log('it worked!', services);
          this.setState({
            services: services
          })
        } 
      });
      console.log("clicked one category");
    }
    render(){
      console.log("category service controller:",this.props.services);
      return(
        <div id='categoryService-container' className="pink lighten-5"> 
          <CategoriesTab categories={this.state.categories} onClickCategory={ this.onClickCategory }/>
          <div className='row'>
            <ServiceCardList services={this.state.services} />     
          </div>
        </div>
      )
    }
}
