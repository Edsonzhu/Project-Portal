import React, { Component } from 'react';
import MainContainer from './mainContainer';
import axios from 'axios';


class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        };
        this.fetchTeams = this.fetchTeams.bind(this);
    }

    componentDidMount() {
        this.fetchTeams();
    }

    fetchTeams() {
        axios.get(`https://team-api-ez.herokuapp.com/teams`)
        .then((res) => this.setState({ teams: res.data }))
        .catch((err) => console.log("Error - Fetch Teams (Teams view) -- " + err));
    }

    render() {
        return (
          <MainContainer sideBar="Teams">
            <h1 className="page-header">Teams</h1>
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Projects</th>
                  <th scope="col">Employees</th>
                  <th scope="col">Team Lead</th>
                </tr>
              </thead>
              <tbody>
                {this.state.teams.map(team => (
                  <tr key={team._id}>
                    <td>{team.TeamName}</td>
                    <td>
                      <ul>
                        {team.Projects.map(proj => (
                          <li key={proj._id}>{proj.ProjectName}</li>
                        ))}
                      </ul>
                    </td>
                    <td>{team.Employees.length} Employees</td>
                    <td>
                      {team.TeamLead.FirstName} {team.TeamLead.LastName}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </MainContainer>
        );
    }
}

export default Teams;