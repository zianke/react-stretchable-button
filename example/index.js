import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactStretchableButton from "../src/react-stretchable-button";

import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaGithub from 'react-icons/lib/fa/github';
import FaStar from 'react-icons/lib/fa/star';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { prevZDepth: 2, nextZDpeth: 2 };
  }

  render() {
    const rootStyleDemo = {
      display: 'inline-block',
      backgroundColor: '#4286f4',
      marginLeft: 20,
      marginRight: 20
    };

    return (
      <div style={{ fontFamily: 'sans-serif' }}>
        <h2>Usage #1: Basic</h2>
        <ReactStretchableButton />
        <h2>Usage #2: Set height and width</h2>
        <ReactStretchableButton height={40} width={[60, 210]} />
        <h2>Usage #3: Set components displayed and to display</h2>
        <ReactStretchableButton height={40} width={[60, 210]}
                                componentDisplayed={<FaGithub size={20} />}
                                componentToDisplay={<span>github.com/zianke</span>} />
        <h2>Usage #4: Set square, alignRight, stretchPadding, zDepth, emergeDelay, event
          handlers</h2>
        <ReactStretchableButton square alignRight stretchPadding={0} zDepth={5} emergeDelay={500}
                                onClick={() => {
                                  alert('Clicked!');
                                }}
                                height={40}
                                width={[60, 210]}
                                componentDisplayed={<FaGithub size={20} />}
                                componentToDisplay={<span style={{ whiteSpace: 'nowrap' }}>Zero padding</span>} />
        <h2>Usage #5: Set root div style</h2>
        <ReactStretchableButton style={rootStyleDemo} />
        <ReactStretchableButton style={rootStyleDemo} />
        <ReactStretchableButton style={rootStyleDemo} />

        <h2>Usage #6: Set button style</h2>
        <ReactStretchableButton style={rootStyleDemo} buttonStyle={{ backgroundColor: 'red' }} />
        <ReactStretchableButton style={rootStyleDemo} buttonStyle={{ backgroundColor: 'yellow' }} />
        <ReactStretchableButton style={rootStyleDemo} buttonStyle={{ backgroundColor: 'green' }} />

        <h2 style={{
          position: 'absolute',
          top: '50%',
          right: 0,
          transform: 'translate(0, -50%)',
          paddingBottom: 200
        }}>Usage #7: Play with position</h2>
        <ReactStretchableButton
          alignRight
          square
          height={100}
          width={[100, 350]}
          zDepth={0}
          stretchPadding={40}
          style={{ position: 'absolute', top: '50%', right: 0, transform: 'translate(0, -50%)' }}
          buttonStyle={{ backgroundColor: '#99c0ff' }}
          componentDisplayed={<FaAngleRight color="white" size={50} />}
          componentToDisplay={<span style={{ whiteSpace: 'nowrap', fontSize: 20, color: 'white' }}>Next Page</span>}
        />

        <ReactStretchableButton
          alignRight
          square
          height={100}
          width={[100, 250]}
          zDepth={0}
          style={{ position: 'absolute', top: '50%', right: 100, transform: 'translate(0, -50%)' }}
          buttonStyle={{ backgroundColor: '#99c0ff' }}
          componentDisplayed={<FaAngleLeft color="white" size={50} />}
          componentToDisplay={<span style={{ whiteSpace: 'nowrap', fontSize: 20, color: 'white' }}>Previous Page</span>}
        />

        <ReactStretchableButton
          style={{ position: 'absolute', right: 0, bottom: 0, margin: 20 }}
          alignRight
          width={[50, 180]}
          componentDisplayed={<FaStar size={20} />}
          componentToDisplay={<span style={{ whiteSpace: 'nowrap' }}>Star this repo!</span>}
          onClick={() => {
            window.location.href = "https://github.com/zianke/react-stretchable-button";
          }} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
