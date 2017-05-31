class CategoryService extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         categories: this.props.categories,
    //         services: this.props.services
    //     }
    //     this.onClickCategory = this.onClickCategory.bind(this);
    // }
    // onClickCategory(id) {
    //   $.ajax({ 
    //     url: `/categories/${id}.json`, 
    //     type: 'GET', 
    //     success: (services) => { 
    //       console.log('it worked!', services);
    //       this.setState({
    //         services: services
    //       })
    //     } 
    //   });
    //   console.log("clicked one category");
    // }

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
