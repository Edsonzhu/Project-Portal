import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProjectsPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
    this.fetchProjects = this.fetchProjects.bind(this);
    this.setState = this.setState.bind(this);
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    axios
      .get(`https://team-api-ez.herokuapp.com/projects`)
      .then(res => this.setState({ projects: res.data }))
      .catch(err => {
        console.log("Error - fetch Projects -- " + err);
      });
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Projects</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {this.state.projects.map(project => (
                  <tr key={project._id}>
                    <td>{project.ProjectName}</td>
                    <td>
                      Active{" "}
                      {moment()
                        .utc()
                        .diff(project.ProjectStartDate, "days")}{" "}
                      Days
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/projects" className="btn btn-primary form-control">
            View All Project Data
          </Link>
        </div>
      </div>
    );
  }
}

export default ProjectsPanel;
