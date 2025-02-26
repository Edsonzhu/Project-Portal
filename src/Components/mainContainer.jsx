import React, { Component } from 'react';
import NavBar from './navBar';
import SideBar from './sideBar';

class MainContainer extends Component {
  render () {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <div className="row">
            <SideBar highlight={this.props.sideBar}/>
            <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer;