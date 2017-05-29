class CategoryService extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            categories: this.props.categories,
            services: this.props.services
        }
    }
    
    render(){
      console.log("category service controller:",this.props.services);
      return(
        <div id='categoryService-container'> 
          <div className='row'>
            <Categories categories={this.state.categories}/>
            <ServiceCardList services={this.state.services} />     
          </div>
        </div>
      )
    }
}
