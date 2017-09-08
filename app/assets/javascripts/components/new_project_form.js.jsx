var NewProjectForm = React.createClass({
  getInitialState: function(){
    return {name: "", description: "", project_cost: ""};
  },

  newProjectSubmit: function(e){
    e.preventDefault();

    this.props.parentProjectSubmit({project: {name: this.state.name, description: this.state.description, project_cost: this.state.project_cost}});
  },

  handleNameChange: function(e){
    this.setState({name: e.target.value});
  },

  handleDescriptionChange: function(e){
    this.setState({description: e.target.value});
  },

  handleProjectCostChange: function(e){
    this.setState({project_cost: e.target.value});
  },


  renderProjectNameField: function(){


    return(

      <div className='row'>

        <div className='col-sm-4'>

          <div className= 'form-group'>

            <input
              name="project[name]"
              type="string"
              placeholder="Project Name"
              value={this.state.name}
              onChange={this.handleNameChange}
              className="string form-control"
            />

          </div>

        </div>

      </div>
    );
  },

  renderProjectDescriptionField: function(){


    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className= 'form-group'>

            <textarea
              name="project[description]"
              placeholder="Project Description"
              value={this.state.description}
              onChange={this.handleDescriptionChange}
              className="text form-control"
            />

          </div>

        </div>

      </div>
    );

  },

  renderProjectCostField: function(){

    return(
      <div className='row'>

        <div className='col-sm-4'>

          <div className='form-group'>

            <input
              name="project[project_cost]"
              type="number"
              placeholder="Project Cost"
              value={this.state.project_cost}
              onChange={this.handleProjectCostChange}
              className="numeric decimal form-control"
            />

          </div>

        </div>
      </div>
    );

  },



  render: function() {

    return(
      <div>
        <h4 style={{marginTop: "50px"}}> Create New Project </h4>

        <form style={{marginTop: "30px"}} onSubmit={this.newProjectSubmit}>

          <div className='form-inputs'/>


            {this.renderProjectNameField()}

            {this.renderProjectDescriptionField()}

            {this.renderProjectCostField()}


            <div className='row'>
              <div className='col-sm-4'>
                <input type="submit" value="Save" className='btn btn-primary' />
              </div>
            </div>

        </form>

      </div>

    );
  }
});