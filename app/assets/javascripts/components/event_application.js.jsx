var EventApplication = React.createClass({
	getInitialState: function(){
		return { events: [] };
	},
	componentDidMount: function(){
		this.getDataFromApi();
	},
	getDataFromApi: function(){
		var self = this;
		$.ajax({
			url: '/api/events',
			success: function(data){
				self.setState({events: data})
			},
			errors: function(xhr, status, error){
				alert('Can not get Data from API');
			}
		});
	},
	handleSearch: function(events) {
    this.setState({ events: events });
  },
  handleAdd: function(event) {
    var events = this.state.events;
    events.push(event);
    this.setState({ events: events });
  },
  handleDeleteRecord: function(event){
  	debugger;
  	var events = this.state.events.slice();
  	var index = events.indexOf(event);
  	events.splice(index, 1);
  	this.setState({events: events});

  },
  handleUpdateRecord: function(old_event, event) {
    var events = this.state.events.slice();
    var index = events.indexOf(old_event);
    events.splice(index, 1, event);
    this.setState({ events: events });
  },
	render: function(){
		return (
			<div className="container">
				<div className="jumbotron">
					<h1>Welcome to the React JS</h1>
					<p>Sanjay Here</p>
				</div>
				<div className="row">
	        <div className="col-md-3">
	          <SearchForm handleSearch={this.handleSearch} />
	        </div>
	        <div className="col-md-9">
	          <NewForm handleAdd={this.handleAdd} />
	        </div>
	      </div>
				<div className="row">
					<div className="col-md-12">
						<EventTable events={this.state.events} 
							handleDeleteRecord={this.handleDeleteRecord} 
							handleUpdateRecord={this.handleUpdateRecord} />
					</div>
				</div>
			</div>
			)
	}
});