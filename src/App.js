import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import RegistrationView from "./authentication/pages/RegistrationView"

class App extends Component {
  state = {
    token: null
  }

  onRegisterFormSubmit = (token, callback) => {
    this.setState({token}, callback)
  }


  render = () => {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route 
                exact path="/register" 
                render={(props) => <RegistrationView {...props} onRegisterFormSubmit={this.onRegisterFormSubmit} />} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
