import React, {Component} from "react";
import axios from "axios";

class RegistrationForm extends Component {
  state = { 
    email: "", 
    password: "" 
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    const {email, password} = this.state;
    

    axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {email, password})
      .then(response => {
        this.props.onRegisterFormSubmit(response.data.token, () => {            
          console.log(response.data);
          this.props.history.push("/"); 
        })
      })
      .catch(err => console.log(err))
    
  }

  onInputChange = (name, event) => {
    this.setState({ [name]: event.target.value });
  }

  render() {
    const { email, password } = this.state;

    return (
      <form onSubmit={this.onFormSubmit}>
        <p>
          <label htmlFor="email">Email</label>
          <input type="email" value={email} onChange={(event) => this.onInputChange("email", event)} />
        </p>
        <p>
          <label htmlFor="email">Password</label>
          <input type="password" value={password} onChange={(event) => this.onInputChange("password", event)} />
        </p>
        <p>
          <input type="submit" value="Register New User" />
        </p>
      </form>
    );
  }
}

export default RegistrationForm;