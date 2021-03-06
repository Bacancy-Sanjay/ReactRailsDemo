var SearchForm = React.createClass({
	handleSearch: function(){
		var query = ReactDOM.findDOMNode(this.refs.query).value;
		var self = this;
		$.ajax({
			url: '/api/events/search',
			data: {query: query},
			success: function(data){
				self.props.handleSearch(data);
			},
			error: function(data){
				alert('Search Error: ',status, xhr, error);
			}
		});
	},
	render: function(){
		return(
			<input onChange={this.handleSearch} type="text" className="form-control"
			placeholder="Enter to Search" ref="query"/>
			)
	}
});