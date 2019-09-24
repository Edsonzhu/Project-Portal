import React, { Component } from 'react';
import MainContainer from './mainContainer';
import ProjectsPanel from './projectsPanel';
import TeamsPanel from './teamsPanel';
import EmployeesPanel from './employeesPanel';


class Overview extends Component {
    render() {
        return (
      <MainContainer sideBar="Overview">
      <h1 className="page-header">Overview</h1>
      <div className="row">
        <div className="col-md-4">
          <ProjectsPanel />
        </div>
        <div className="col-md-4">
          <TeamsPanel />
        </div>
        <div className="col-md-4">
          <EmployeesPanel />
        </div>
      </div>
    </MainContainer>
        )
    }
}

export default Overview;