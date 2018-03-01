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
          height={50}
          width={[50, 100]}
          stretchPadding={25}
          circle
          align="right"
          style={{
            width: 100,
            backgroundColor: 'rgb(0,0,255)',
          }}
          zDepth={this.state.stretchableButtonZDepth}
          onMouseEnter={() => {
            this.setState({ stretchableButtonZDepth: 3 });
          }}
          onMouseLeave={() => {
            this.setState({ stretchableButtonZDepth: 2 });
          }}
          componentDisplayed={<span>A</span>}
          componentToDisplay={<span>BBB</span>} />
      </div>
    );
  }
}

export default App;
