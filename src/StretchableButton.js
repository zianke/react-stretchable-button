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
  transition: '.25s all'
};

class StretchableButton extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter() {
    this.setState({ hovered: true });
  }

  handleMouseLeave() {
    this.setState({ hovered: false });
  }

  render() {
    return (
      <div
        style={{
          width: this.props.width[1],
          height: this.props.height,
          backgroundColor: 'red',
          position: 'relative',
        }}>
        <div {...this.props}
             style={Object.assign({}, buttonSytle, this.props.style, {
               height: this.props.height,
               width: this.state.hovered ? this.props.width[1] : this.props.width[0],
               borderRadius: this.props.circle && this.props.height && this.props.height / 2,
               float: this.props.align === 'right' && 'right'
             }, zDepth[this.props.zDepth])}
             onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
        </div>
        <div style={Object.assign({
          position: 'absolute',
          top: 0
        }, this.props.align === 'right' ? { right: 0 } : { left: 0 })}>
          icon
        </div>
        <div style={Object.assign({
          position: 'absolute',
          top: 0
        }, this.props.align === 'right' ? { left: 0 } : { right: 0 })}>
          text
        </div>
      </div>
    );
  }
}

export default StretchableButton;
