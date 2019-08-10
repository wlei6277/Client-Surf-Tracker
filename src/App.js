import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import RegistrationView from "./components/pages/RegistrationView";
import Reports from "./components/pages/Reports";
import Navbar from "./components/navbar/NavBar";

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
        <header>
          <Navbar />
        </header>
        <main>
          <Switch>
            <Route 
              exact path="/" 
              component={HomePage} 
            />
            <Route 
              exact path="/register" 
              render={(props) => <RegistrationView {...props} onRegisterFormSubmit={this.onRegisterFormSubmit} />} 
            />
            <Route 
              exact path="/reports" 
              component={Reports} 
            />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
