class CategoryService extends React.Component{
    
    render(){
        return(
            <div id='categoryService-container'> 
                <div className='row'>
                    <Categories categories={this.props.categories}/>
                    <ServiceCardList current_user={this.props.current_user}/>                 
                </div>
            </div>
        )
    }
}
