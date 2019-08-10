import React, {Component} from "react";
import {Link} from "react-router-dom";

class NavBar extends Component {
  render() {
    return(
      <div className="nav-bar">
        <ul>
          <li><Link to="/">home</Link></li>
          <li><Link to="/reports">reports</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Sign Up</Link></li>
        </ul>
      </div>
    )
  };
}

export default NavBar;