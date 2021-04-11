import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import "./navigator.css";

class Navigator extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink activeClassName="active" exact to="/all-courses">Courses</NavLink></li>
          <li><NavLink activeClassName="active" exact to="/users">Users</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Navigator;