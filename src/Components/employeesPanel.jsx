import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EmployeesPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: []
    };
    this.fetchEmployees = this.fetchEmployees.bind(this);
  }

  componentDidMount() {
    this.fetchEmployees();
  }

  fetchEmployees() {
    axios
      .get(`https://shrouded-crag-99446.herokuapp.com/employees`)
      .then(res => this.setState({ employees: res.data }))
      .catch(err => console.log("Error - fetch Employees -- " + err));
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Employees</h3>
        </div>
        <div className="panel-body">
          <div className="table-responsive overview-table">
            <table className="table table-striped table-bordered">
              <tbody>
                {this.state.employees.map(emp => (
                  <tr key={emp._id}>
                    <td>
                      {emp.FirstName} {emp.LastName}
                    </td>
                    <td>{emp.Position.PositionName}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Link to="/employees" className="btn btn-primary form-control">

            View All Employee Data
          </Link>
        </div>
      </div>
    );
  }
}

export default EmployeesPanel;
