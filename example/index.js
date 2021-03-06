import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactStretchableButton from '../src/react-stretchable-button';

import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaGithub from 'react-icons/lib/fa/github';
import FaStar from 'react-icons/lib/fa/star';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const rootStyleDemo = {
            display: 'inline-block',
            backgroundColor: '#4286f4',
            marginLeft: 20,
            marginRight: 20
        };

        return (
            <div style={{fontFamily: 'sans-serif'}}>
                <h2>Usage #1: Basic</h2>
                <ReactStretchableButton/>
                <h2>Usage #2: Set height and width</h2>
                <ReactStretchableButton height={40} width={[60, 210]}/>
                <h2>Usage #3: Set components displayed and to display</h2>
                <ReactStretchableButton height={40} width={[60, 210]}
                    componentDisplayed={<FaGithub size={20}/>}
                    componentToDisplay={<span>github.com/zianke</span>}/>
                <h2>Usage #4: Set square, alignRight, stretchPadding, zDepth, transitionDuration, emergeDelay, event
                    handlers</h2>
                <ReactStretchableButton
                    square
                    alignRight
                    stretchPadding={0}
                    zDepth={5}
                    transitionDuration={50}
                    emergeDelay={500}
                    onClick={() => {
                        alert('Clicked!');
                    }}
                    height={40}
                    width={[60, 210]}
                    componentDisplayed={<FaGithub size={20}/>}
                    componentToDisplay={<span style={{whiteSpace: 'nowrap'}}>Zero padding</span>}/>
                <h2>Usage #5: Set root div style</h2>
                <ReactStretchableButton style={rootStyleDemo}/>
                <ReactStretchableButton style={rootStyleDemo}/>
                <ReactStretchableButton style={rootStyleDemo}/>

                <h2>Usage #6: Set button style</h2>
                <ReactStretchableButton style={rootStyleDemo} buttonStyle={{backgroundColor: 'red'}}/>
                <ReactStretchableButton style={rootStyleDemo} buttonStyle={{backgroundColor: 'yellow'}}/>
                <ReactStretchableButton style={rootStyleDemo} buttonStyle={{backgroundColor: 'green'}}/>

                <h2 style={{
                    position: 'fixed',
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
                    style={{position: 'fixed', top: '50%', right: 0, transform: 'translate(0, -50%)'}}
                    buttonStyle={{backgroundColor: '#99c0ff'}}
                    componentDisplayed={<FaAngleRight color="white" size={50}/>}
                    componentToDisplay={<span
                        style={{whiteSpace: 'nowrap', fontSize: 20, color: 'white'}}>Next Page</span>}
                />

                <ReactStretchableButton
                    alignRight
                    square
                    height={100}
                    width={[100, 250]}
                    zDepth={0}
                    style={{position: 'fixed', top: '50%', right: 100, transform: 'translate(0, -50%)'}}
                    buttonStyle={{backgroundColor: '#99c0ff'}}
                    componentDisplayed={<FaAngleLeft color="white" size={50}/>}
                    componentToDisplay={<span
                        style={{whiteSpace: 'nowrap', fontSize: 20, color: 'white'}}>Previous Page</span>}
                />

                <div style={{position: 'fixed', right: 0, bottom: 0}}>
                    {['S', 'T', 'A', 'R', '!'].map((c) => <ReactStretchableButton
                        key={c}
                        style={{margin: 20}}
                        alignRight
                        componentDisplayed={<FaStar size={20}/>}
                        componentToDisplay={<span>{c}</span>}
                        onClick={() => {
                            window.location.href = 'https://github.com/zianke/react-stretchable-button';
                        }}/>)}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));
