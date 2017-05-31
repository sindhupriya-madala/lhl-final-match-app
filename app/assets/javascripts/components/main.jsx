class Main extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
				categories: this.props.categories,
				services: this.props.services
		}
		this.onClickCategory = this.onClickCategory.bind(this);
		this.onClickSearch = this.onClickSearch.bind(this);
	}

	onClickCategory(id) {
		$.ajax({ 
			url: `/categories/${id}.json`, 
			type: 'GET', 
			success: (services) => { 
				this.setState({ services: services })
			} 
		});
	}

	onClickSearch(search) {
		console.log("search content is", search);
		$.ajax({ 
			url: `/searchbar`, 
			type: 'GET',
			data:{
				search: search
			},
			success: (services) => { 
				this.setState({ services: services })
				console.log('services is', services)
			} 
		});
	}

	render(){
		return(
			<div>
				<Banner onClickSearch = {this.onClickSearch} />
				<About />
				<CategoryService 
					categories={this.state.categories} 
					services={this.state.services} 
					current_user={this.state.current_user}
					onClickCategory={this.onClickCategory}
				/>              
			</div>
		)
	}
}
