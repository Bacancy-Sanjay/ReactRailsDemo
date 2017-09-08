var ProjectsContainer = React.createClass({

  getInitialState: function(){
    return {
      projects: this.props.projects,
    }
  },

  parentProjectSubmit: function(formData, onSuccess, onError){

    $.ajax({
      url: "/projects",
      dataType: 'json',
      type: 'POST',
      data: formData,

      success: function(projects) {

        this.setState({projects: projects});

        onSuccess();

      }.bind(this),

      error: function(response, status, err) {

        onError(response.responseJSON)

      }


    });
  },

  parentUpdateProject: function(formData, onSuccess, onError){

    $.ajax({
      url: ("/projects/" + formData["project"]["id"]),
      dataType: 'json',
      type: 'PATCH',
      data: formData,


      success: function(projects) {

        this.setState({projects: projects, showNewForm: false});
        onSuccess();

      }.bind(this),

      error: function(response, status, err) {

        onError(response.responseJSON)
      }

    });

  },

  render: function() {

    return(
      <div>

        <h1> Project List </h1>

        <ProjectTable projects={this.state.projects} parentUpdateProject={this.parentUpdateProject} />

        <NewProjectForm parentProjectSubmit={this.parentProjectSubmit} />

      </div>
    );
  }
});

var ProjectTable = React.createClass({


  renderProjectRows: function(){

    return (
      this.props.projects.map(function(project){
        return(
          <ProjectRow
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            project_cost={project.project_cost}
            parentUpdateProject={this.props.parentUpdateProject} />
        );
      }.bind(this))
    );

  },

  render: function() {
    return(
      <div>

        <div className="row" style={{marginTop: "50px"}}>

          <div className="col-sm-2">
          </div>

          <div className="col-sm-2" style={{fontWeight: "bold"}}>
            Name
          </div>

          <div className="col-sm-4" style={{fontWeight: "bold"}}>
            Description
          </div>

          <div className="col-sm-2" style={{fontWeight: "bold"}}>
            Project Cost
          </div>

        </div>

        {this.renderProjectRows()}

      </div>
    );
  }

});



var ProjectRow = React.createClass({

  getInitialState: function(){
    return ( {id: this.props.id, name: this.props.name, description: this.props.description, project_cost: this.props.project_cost, edit: false, formErrors: {}} )
  },

  editProject: function(){
    this.setState({edit: true});
  },

  cancelEdit: function(e){
    e.preventDefault();
    this.setState({edit: false, name: this.props.name, description: this.props.description, project_cost: this.props.project_cost, formErrors: {}});
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

  handleValidationErrors: function(formErrorObject){
    this.setState({edit: true, formErrors: formErrorObject});
  },

  handleUpdate: function(){
    this.setState({edit: false, formErrors: false});
  },

  updateProject: function(e){
    e.preventDefault();
    this.props.parentUpdateProject(
      {project: {id: this.state.id, name: this.state.name, description: this.state.description, project_cost: this.state.project_cost}},
      this.handleUpdate,
      this.handleValidationErrors
    );
  },

  renderFieldErrors: function(attribute){
    if(this.state.formErrors[attribute]){
      return(
        this.state.formErrors[attribute].map(function(error, i){
          return(
            <span key={i} className="help-block">
              {error}
            </span>
          );
        })
      );
    }
    else{
      return "";
    }
  },

  renderProjectNameEditFields: function(){
    var formGroupClass = this.state.formErrors["name"] ? "form-group has-error" : "form-group"

    return(

      <div className= {formGroupClass}>

        <input
          name="project[name]"
          type="string"
          placeholder="Project Name"
          value={this.state.name}
          onChange={this.handleNameChange}
          className="string form-control"
        />

        {this.renderFieldErrors("name")}

      </div>


    );
  },

  renderProjectDescriptionEditFields: function(){
    var formGroupClass = this.state.formErrors["description"] ? "form-group has-error" : "form-group"

    return(

      <div className= {formGroupClass}>

        <textarea
          name="project[description]"
          placeholder="Project Description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
          className="text form-control"
        />

        {this.renderFieldErrors("description")}

      </div>


    );
  },

  renderProjectCostEditFields: function(){

    var formGroupClass = this.state.formErrors["project_cost"] ? "form-group has-error" : "form-group"

    return(

      <div className={formGroupClass}>

        <input
          name="project[project_cost]"
          type="number"
          placeholder="Project Cost"
          value={this.state.project_cost}
          onChange={this.handleProjectCostChange}
          className="numeric decimal form-control"
        />

        {this.renderFieldErrors("project_cost")}

      </div>


    );

  },

  render: function() {

    if(this.state.edit == false){
      return(
        <div className="row" style={{marginTop: "20px"}}>

          <div className="col-sm-2">
            <button className='btn btn-sm btn-primary' onClick={this.editProject}>
              Edit Project
            </button>
          </div>

          <div className="col-sm-2">
            {this.state.name}
          </div>

          <div className="col-sm-4">
            {this.state.description}
          </div>

          <div className="col-sm-2">
            {this.state.project_cost}
          </div>

        </div>
      );
    }
    else{
      return(

        <div className="row" style={{marginTop: "20px"}}>

          <form style={{marginTop: "30px"}} onSubmit={this.updateProject}>

            <div className="col-sm-2">

              <input type="submit" value="Save" className='btn btn-success' />

              <button className='btn btn-sm btn-primary' style={{marginLeft:'10px'}} onClick={this.cancelEdit}>
                Cancel
              </button>

            </div>

            <div className="col-sm-2">
              {this.renderProjectNameEditFields()}
            </div>

            <div className="col-sm-4">
              {this.renderProjectDescriptionEditFields()}
            </div>

            <div className="col-sm-2">
              {this.renderProjectCostEditFields()}
            </div>

          </form>

        </div>


      );
    }

  }

});
