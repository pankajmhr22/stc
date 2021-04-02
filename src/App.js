import './App.scss';
import Header from './components/Header';
import { React, Component } from 'react';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <div className="app-content"> App Content Placeholder</div>
        <div>Footer Placeholder</div>
      </div>
    );
  }
}

export default App;
