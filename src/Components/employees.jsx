import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './mainContainer';

class Employees extends Component {
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
        axios.get(`https://shrouded-crag-99446.herokuapp.com/employees`)
        .then((res) => this.setState({ employees: res.data }))
        .catch((err) => console.log("Error - Fetch Employees (Employees view) -- " + err));
    }

    render() {
        return(
            <MainContainer sidebar="Employees">
                <h1 className="page-header">Employees</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">Name (AND) Position</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Hire Date</th>
                            <th scope="col">Salary Bonus</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(emp => 
                            <tr key={emp._id}>
                                <td>{emp.FirstName} {emp.LastName} - {emp.Position.PositionName}</td>
                                <td></td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </MainContainer>
        )
    }
}

export default Employees;