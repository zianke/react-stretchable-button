import React, {Component} from 'react';
import PropTypes from 'prop-types';


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
    const {
      height,
      width,
      style,
      buttonStyle,
      square,
      alignRight,
      stretchPadding,
      zDepth,
      onMouseEnter,
      onMouseLeave,
      componentDisplayed,
      componentToDisplay,
      ...other
    } = this.props;

    const zDepthValues = [{
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

    const buttonBasicSytle = {
      height,
      borderRadius: !square && height && height / 2,
      cursor: 'pointer',
      transition: '.25s all',
    };

    const buttonLayerStyle = {
      ...buttonBasicSytle,
      opacity: 0,
      position: 'absolute',
      top: 0,
    }

    const emergeStyle = {
      position: 'absolute',
      top: 0,
      height,
      opacity: this.state.hovered ? 1 : 0,
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
    return (
      <div style={style}>
        <div
          style={Object.assign({}, {
            width: width[1],
            height: height,
            position: 'relative',
          })}>
          <div
            style={Object.assign({}, buttonBasicSytle, buttonStyle, {
              width: this.state.hovered ? width[1] : width[0],
              float: alignRight && 'right'
            }, zDepthValues[zDepth])}
          >
            <div style={Object.assign({
              height,
              width: width[0],
              float: alignRight && 'right'
            }, centerParentStyle)}>
              <div style={centerChildStyle}>
                {componentDisplayed}
              </div>
            </div>
          </div>
          <div
            style={Object.assign({}, centerParentStyle, emergeStyle, alignRight ? { left: stretchPadding } : { right: stretchPadding })}>
            <div style={centerChildStyle}>
              {componentToDisplay}
            </div>
          </div>
          <div {...other}
               style={Object.assign({}, buttonLayerStyle, {
                 width: this.state.hovered ? width[1] : width[0],
               }, alignRight ? { right: 0 } : { left: 0 })}
               onMouseEnter={(e) => {
                 onMouseEnter && onMouseEnter(e);
                 this.handleMouseEnter(e);
               }}
               onMouseLeave={(e) => {
                 onMouseLeave && onMouseLeave(e);
                 this.handleMouseLeave(e);
               }}>
          </div>
        </div>
      </div>
    );
  }
}

StretchableButton.propTypes = {
  height: PropTypes.number,
  width: PropTypes.arrayOf(PropTypes.number),
  style: PropTypes.object,
  buttonStyle: PropTypes.object,
  square: PropTypes.bool,
  alignRight: PropTypes.bool,
  stretchPadding: PropTypes.number,
  zDepth: PropTypes.number,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  componentDisplayed: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  componentToDisplay: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

StretchableButton.defaultProps = {
  height: 50,
  width: [50, 100],
  square: false,
  alignRight: false,
  stretchPadding: 25,
  zDepth: 2,
}


export default StretchableButton;
