import React from "react";
import "./App.css";
import { Redirect } from "react-router-dom";

class App extends React.Component {
  state = {
    redirect: null,
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <div className="App">
        <header>
          <h1>quiz.html</h1>
        </header>
      </div>
    );
  }
}

export default App;
