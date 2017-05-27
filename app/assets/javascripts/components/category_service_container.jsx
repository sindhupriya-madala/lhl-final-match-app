class CategoryService extends React.Component{
    
    render(){
        return(
            <div id='categoryService-container'> 
                <div className='row'>
                    <Categories categories={this.props.categories}/>
                    <ServiceCardList />                 
                </div>
            </div>
        )
    }
}
