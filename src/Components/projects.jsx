import React, { Component } from 'react';
import MainContainer from './mainContainer';
import axios from 'axios';
import moment from 'moment';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
    this.fetchProjects = this.fetchProjects.bind(this);
  }

  componentDidMount() {
    this.fetchProjects();
  }

  fetchProjects() {
    axios
      .get(`https://team-api-ez.herokuapp.com/projects`)
      .then(res => {
        this.setState({ projects: res.data });
      })
      .catch(err => {
        console.log("Error - Fetch Project (Project.jsx) -- " + err);
      });
  }

  render() {
    return (
      <MainContainer sideBar="Projects">
        <h1 className="page-header">Projects</h1>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Start Date</th>
              <th scope="col">End Date</th>
            </tr>
          </thead>
          <tbody>
            {this.state.projects.map(project => (
              <tr key={project._id}>
                <td>{project.ProjectName}</td>
                <td>{project.ProjectDescription}</td>
                <td>{moment(project.ProjectStartDate).utc().format('LL')}</td>
                <td>{project.ProjectEndDate === null ? ('n/a') : (moment(project.ProjectEndDate).format('LL'))}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </MainContainer>
    );
  }
}

export default Projects;