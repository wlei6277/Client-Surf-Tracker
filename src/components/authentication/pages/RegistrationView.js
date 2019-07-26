import React, {Component} from "react";
import RegistrationForm from "./../forms/RegistrationForm";
import {Link} from "react-router-dom";

class RegistrationView extends Component {
  render() {
    return (
      <div className="RegistrationView">
        <h1>Create a user profile</h1>
        <RegistrationForm {...this.props} />
        <Link to="/">Go back</Link>
      </div>
    )
  }
}

export default RegistrationView;