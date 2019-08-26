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
        axios.get(`https://shrouded-crag-99446.herokuapp.com/projects`)
        .then((res) => {this.setState({ projects: res.data })})
        .catch((err) => { console.log("Error - Fetch Project (Project.jsx) -- " + err ) })
    }

    render() {
        return (
            <MainContainer sideBar="Projects">
                <h1 className="page-header">Projects</h1>
                <table className="table table-striped table-bordered">
                    <thead>
                        <td>Name</td>
                        <td>Description</td>
                        <td>Start Date</td>
                        <td>End Date</td>
                    </thead>
                    {this.state.projects.map(project => 
                        <tr>
                            <td>{ project.ProjectName }</td>
                            <td>{ project.Description }</td>
                            <td>{ project.StartDate }</td>
                            <td>{ project.EndDate }</td>
                        </tr>
                        )}
                </table>
            </MainContainer>
        )
    }
}

export default Projects;