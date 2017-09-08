var ProjectTable = React.createClass({
  renderProjectRows: function(){
    return(
      this.props.projects.map(function(project){
        return(
          <div className="row" style={{marginTop: "20px"}} key={project.id}>

            <div className="col-sm-2">
            </div>

            <div className="col-sm-2">
              {project.name}
            </div>

            <div className="col-sm-4">
              {project.description}
            </div>

            <div className="col-sm-2">
              {project.project_cost}
            </div>

          </div>
        )
      })
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