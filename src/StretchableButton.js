import React, {Component} from 'react';
import logo from './logo.svg';


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

const buttonLayerStyle = {
  transition: '.25s all',
  opacity: 0
}

const emergeStyle = {
  transition: '.25s all',
  /*
    transitionDelay: '.25s'
  */
};

const centerParentStyle = {
  display: 'table'
};

const centerChildStyle = {
  display: 'table-cell',
  verticalAlign: 'middle',
  textAlign: 'center',
};

class StretchableButton extends Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleMouseEnter(e) {
    this.setState({ hovered: true });
  }

  handleMouseLeave(e) {
    this.setState({ hovered: false });
  }

  render() {
    return (
      <div
        style={{
          width: this.props.width[1],
          height: this.props.height,
          position: 'relative',
        }}>
        <div
          style={Object.assign({}, buttonSytle, this.props.style, {
            height: this.props.height,
            width: this.state.hovered ? this.props.width[1] : this.props.width[0],
            borderRadius: this.props.circle && this.props.height && this.props.height / 2,
            float: this.props.align === 'right' && 'right'
          }, zDepth[this.props.zDepth])}
        >
          <div style={Object.assign({
            height: this.props.height,
            width: this.props.width[0],
            float: this.props.align === 'right' && 'right'
          }, centerParentStyle)}>
            <div style={centerChildStyle}>
              {this.props.children}
            </div>
          </div>
        </div>
        <div style={Object.assign({
          position: 'absolute',
          top: 0,
          height: this.props.height,
          opacity: this.state.hovered ? 1 : 0
        }, centerParentStyle, emergeStyle, this.props.align === 'right' ? { left: this.props.stretchPadding } : { right: this.props.stretchPadding })}>
          <div style={centerChildStyle}>
            <span>BBB</span>
          </div>
        </div>
        <div {...this.props}
             style={Object.assign({}, { cursor: this.props.style.cursor ? this.props.style.cursor : 'pointer' }, {
               position: 'absolute',
               top: 0,
               height: this.props.height,
               width: this.state.hovered ? this.props.width[1] : this.props.width[0],
               borderRadius: this.props.circle && this.props.height && this.props.height / 2,
             }, buttonLayerStyle, this.props.align === 'right' ? { right: 0 } : { left: 0 })}
             onMouseEnter={(e) => {
               this.props.onMouseEnter(e);
               this.handleMouseEnter(e);
             }}
             onMouseLeave={(e) => {
               this.props.onMouseLeave(e);
               this.handleMouseLeave(e);
             }}>
        </div>
      </div>
    );
  }
}

export default StretchableButton;
