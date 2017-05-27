class Main extends React.Component{
    
    render(){
        return(
            <div>
                <Banner />
                <About />
                <CategoryService categories={this.props.categories}/>              
            </div>
        )
    }
}
