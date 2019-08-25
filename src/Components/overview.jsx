import React, { Component } from 'react';
import MainContainer from './Components/mainContainer';
import ProjectsPanel from './Components/projectsPanel';
import TeamsPanel from './Components/teamsPanel';
import EmployeesPanel from './Components/employeesPanel';


class Overview extends Component {
    render() {
        return (
      <MainContainer sideBarHighlight="Projects">
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