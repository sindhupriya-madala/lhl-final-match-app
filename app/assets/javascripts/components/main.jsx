class Main extends React.Component{
    
    render(){
        return(
            <div>
                <Banner />
                <CategoryService categories={this.props.categories} services={this.props.services} current_user={this.props.current_user}/>              
            </div>
        )
    }
}
