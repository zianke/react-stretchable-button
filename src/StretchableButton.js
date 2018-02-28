import React, {Component} from 'react';


const zDepth = [{
    boxShadow: '0 0 0 rgba(0, 0, 0, 0), 0 0 0 rgba(0, 0, 0, 0)'
}, {
    boxShadow: '0 1px 6px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.12)'
}, {
    boxShadow: '0 3px 10px rgba(0,0,0,0.16), 0 3px 10px rgba(0,0,0,0.23)'
}, {
    boxShadow: '0 10px 30px rgba(0,0,0,0.19), 0 6px 10px rgba(0,0,0,0.23)'
}, {
    boxShadow: '0 14px 45px rgba(0,0,0,0.25), 0 10px 18px rgba(0,0,0,0.22)'
}, {
    boxShadow: '0 19px 60px rgba(0,0,0,0.3), 0 15px 20px rgba(0,0,0,0.22)'
}];

const buttonSytle = {
    width: 100,
    backgroundColor: 'red',
    transition: '.25s all',
};

class StretchableButton extends Component {
    constructor(props) {
        super(props);
        this.state = {hovered: false};
    }

    render() {
        return (
            <div {...this.props} style={Object.assign({}, buttonSytle, zDepth[this.props.zDepth])}>
                test
            </div>
        );
    }
}

export default StretchableButton;
