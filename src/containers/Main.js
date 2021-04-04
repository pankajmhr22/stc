import "../App.scss";
import Header from "../components/Header";
import { React, Component } from "react";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      url: [],
    };
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="app-content">
            <Switch>
              <Route path="/about" component={About} />
              <Route
                render={() => {
                  return <h1>OOPS U TYPE SOMETHING ELSE....</h1>;
                }}
              />
            </Switch>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
