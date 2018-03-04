'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactStretchableButton = function (_Component) {
    _inherits(ReactStretchableButton, _Component);

    function ReactStretchableButton(props) {
        _classCallCheck(this, ReactStretchableButton);

        var _this = _possibleConstructorReturn(this, (ReactStretchableButton.__proto__ || Object.getPrototypeOf(ReactStretchableButton)).call(this, props));

        _this.state = { hovered: false, emerging: false, toEmerge: {}, unHovered: {} };
        _this.handleMouseEnter = _this.handleMouseEnter.bind(_this);
        _this.handleMouseLeave = _this.handleMouseLeave.bind(_this);
        return _this;
    }

    _createClass(ReactStretchableButton, [{
        key: 'handleMouseEnter',
        value: function handleMouseEnter(e) {
            var _this2 = this;

            clearTimeout(this.state.unHovered);
            this.setState({
                hovered: true, toEmerge: setTimeout(function () {
                    _this2.setState({ emerging: true });
                }, this.props.emergeDelay)
            });
        }
    }, {
        key: 'handleMouseLeave',
        value: function handleMouseLeave(e) {
            var _this3 = this;

            clearTimeout(this.state.toEmerge);
            this.setState({
                emerging: false, unHovered: setTimeout(function () {
                    _this3.setState({ hovered: false });
                }, this.props.emergeDelay)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props = this.props,
                height = _props.height,
                width = _props.width,
                style = _props.style,
                buttonStyle = _props.buttonStyle,
                square = _props.square,
                alignRight = _props.alignRight,
                stretchPadding = _props.stretchPadding,
                zDepth = _props.zDepth,
                _onMouseEnter = _props.onMouseEnter,
                _onMouseLeave = _props.onMouseLeave,
                componentDisplayed = _props.componentDisplayed,
                componentToDisplay = _props.componentToDisplay,
                other = _objectWithoutProperties(_props, ['height', 'width', 'style', 'buttonStyle', 'square', 'alignRight', 'stretchPadding', 'zDepth', 'onMouseEnter', 'onMouseLeave', 'componentDisplayed', 'componentToDisplay']);

            var zDepthValues = [{
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

            var buttonBasicSytle = {
                height: height,
                borderRadius: !square && height && height / 2,
                cursor: 'pointer',
                transition: this.props.transitionDuration / 1000 + 's all'
            };

            var buttonLayerStyle = _extends({}, buttonBasicSytle, {
                opacity: 0,
                position: 'absolute',
                top: 0
            });

            var emergeStyle = {
                position: 'absolute',
                top: 0,
                height: height,
                opacity: this.state.emerging ? 1 : 0,
                userSelect: this.state.emerging ? 'auto' : 'none',
                transition: this.props.transitionDuration / 1000 + 's all'
            };

            var centerParentStyle = {
                display: 'table'
            };

            var centerChildStyle = {
                display: 'table-cell',
                verticalAlign: 'middle',
                textAlign: 'center'
            };

            return _react2.default.createElement(
                'div',
                { style: style },
                _react2.default.createElement(
                    'div',
                    {
                        style: _extends({}, {
                            width: width[1],
                            height: height,
                            position: 'relative'
                        }) },
                    _react2.default.createElement(
                        'div',
                        {
                            style: _extends({}, buttonBasicSytle, buttonStyle, {
                                width: this.state.hovered ? width[1] : width[0],
                                float: alignRight && 'right'
                            }, zDepthValues[zDepth])
                        },
                        _react2.default.createElement(
                            'div',
                            { style: _extends({
                                    height: height,
                                    width: width[0],
                                    float: alignRight && 'right'
                                }, centerParentStyle) },
                            _react2.default.createElement(
                                'div',
                                { style: centerChildStyle },
                                componentDisplayed
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        {
                            style: _extends({}, centerParentStyle, emergeStyle, alignRight ? { left: stretchPadding } : { right: stretchPadding }) },
                        _react2.default.createElement(
                            'div',
                            { style: centerChildStyle },
                            componentToDisplay
                        )
                    ),
                    _react2.default.createElement('div', _extends({}, other, {
                        style: _extends({}, buttonLayerStyle, {
                            width: this.state.hovered ? width[1] : width[0]
                        }, alignRight ? { right: 0 } : { left: 0 }),
                        onMouseEnter: function onMouseEnter(e) {
                            _onMouseEnter && _onMouseEnter(e);
                            _this4.handleMouseEnter(e);
                        },
                        onMouseLeave: function onMouseLeave(e) {
                            _onMouseLeave && _onMouseLeave(e);
                            _this4.handleMouseLeave(e);
                        } }))
                )
            );
        }
    }]);

    return ReactStretchableButton;
}(_react.Component);

ReactStretchableButton.propTypes = {
    height: _propTypes2.default.number,
    width: _propTypes2.default.arrayOf(_propTypes2.default.number),
    style: _propTypes2.default.object,
    buttonStyle: _propTypes2.default.object,
    square: _propTypes2.default.bool,
    alignRight: _propTypes2.default.bool,
    stretchPadding: _propTypes2.default.number,
    zDepth: _propTypes2.default.number,
    transitionDuration: _propTypes2.default.number,
    emergeDelay: _propTypes2.default.number,
    onMouseEnter: _propTypes2.default.func,
    onMouseLeave: _propTypes2.default.func,
    componentDisplayed: _propTypes2.default.node,
    componentToDisplay: _propTypes2.default.node
};

ReactStretchableButton.defaultProps = {
    height: 50,
    width: [50, 100],
    square: false,
    alignRight: false,
    stretchPadding: 25,
    zDepth: 2,
    transitionDuration: 250,
    emergeDelay: 100
};

exports.default = ReactStretchableButton;