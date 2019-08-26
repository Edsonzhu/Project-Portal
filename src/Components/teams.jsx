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

    ComponetDidMount() {
        this.fetchTeams();
    }

    fetchTeams() {
        axios.get(`https://shrouded-crag-99446.herokuapp.com/teams`)
        .then((res) => this.setState({ teams: res.data }))
        .catch((err) => console.log("Error - Fetch Teams (Teams view) -- " + err));
    }

    render() {
        return(
            <MainContainer sideBar="Teams">
                <h1 className="page-header">Teams</h1>

            </MainContainer>
        )
    }
}

export default Teams;