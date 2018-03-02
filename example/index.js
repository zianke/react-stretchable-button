import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import StretchableButton from "../src/react-stretchable-button";

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {faAngleRight} from '@fortawesome/fontawesome-free-solid'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { stretchableButtonZDepth: 2 };
  }

  render() {
    return (
      <div style={{ fontFamily: 'sans-serif' }}>
        <StretchableButton
          style={{ position: 'absolute', right: 0, bottom: 0, margin: 20 }}
          alignRight
          componentDisplayed={<FontAwesomeIcon icon={faAngleRight} />}
          componentToDisplay={<span>Next</span>}
          onClick={() => {
            console.log('click');
          }} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
