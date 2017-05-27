class Main extends React.Component{
    
    render(){
        return(
            <div>
                <Banner />
                <About />
                <CategoryService categories={this.props.categories} current_user={this.props.current_user}/>              
            </div>
        )
    }
}
