import "../App.scss";
import Header from "../components/Header";
import { React, Component } from "react";
import { Footer } from "../components/Footer";
import { About } from "../components/About";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Catalogue } from "../components/Catalogue";
import { Home } from "../components/Home";

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
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/products" component={Catalogue} />
              <Route
                render={() => {
                  return <div>OOPS U TYPE SOMETHING ELSE....</div>;
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
