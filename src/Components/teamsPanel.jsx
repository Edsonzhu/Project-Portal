import React, { Component } from 'react';
import axios from 'axios';

class TeamsPanel extends Component {
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
    axios.get(`https://shrouded-crag-99446.herokuapp.com/teams`)
    .then((res) => this.setState({ teams: res.data }))
    .catch((err) => console.log("Erro - fetch Teams --" + err));
  }

  render() {
    return (
      <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Teams</h3>
              </div>
              <div className="panel-body">
                <div className="table-responsive overview-table">
                  <table className="table table-striped table-bordered">
                    <tbody>
                      {this.state.teams.map(team =>
                        <tr key={team._id}>
                          <td>{team.TeamName}</td>
                          <td>{team.Employees.length} Employees</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <a href="/teams" className="btn btn-primary form-control">
                  View All Team Data
                </a>
              </div>
            </div>
    )
  }
}

export default TeamsPanel;