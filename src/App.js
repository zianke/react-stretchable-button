import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './StretchableButton'
import StretchableButton from "./StretchableButton";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { stretchableButtonZDepth: 2 };
  }

  render() {
    return (
      <div className="App" style={{ /*{backgroundColor:'rgb(100,100,100)'}*/ }}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <StretchableButton
          style={{ position: 'absolute', right: 0, bottom: 0, margin: 20}}
          buttonStyle={{
            backgroundColor: 'rgb(0,0,255)',
          }}
          alignRight
          componentDisplayed={<span>A</span>}
          componentToDisplay={<span>BBB</span>} />
      </div>
    );
  }
}

export default App;
