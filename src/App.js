import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './StretchableButton'
import StretchableButton from "./StretchableButton";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faSpinner} from '@fortawesome/fontawesome-free-solid'

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
          style={{ position: 'absolute', right: 0, bottom: 0, margin: 20 }}
          alignRight
          componentDisplayed={<FontAwesomeIcon icon={faSpinner} />}
          componentToDisplay={<span>BBB</span>}
          onClick={() => {
            console.log('click');
          }} />
      </div>
    );
  }
}

export default App;
