# react-stretchable-button
[![npm version](https://badge.fury.io/js/react-stretchable-button.svg)](https://badge.fury.io/js/react-stretchable-button)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)

A simple React button component that can be stretched to display something on mouse over.

## Demo

[Demo](https://react-ykwfwq.stackblitz.io) is available with [source code](https://stackblitz.com/edit/react-ykwfwq).

## Installation

```
npm install react-stretchable-button --save
```

## API

| Property | Description | Default value | type |
| -------- | ----------- | ------------- | ---- |
| `height`  | Height of button | 50 | number |
| `width`  | Width of button before and after strech  | [50,100] | array |
| `style`  | Style of root div  | `null` | object |
| `buttonStyle`  | Style of button div  | `null` | object |
| `square` | Should button shape be square | `false` | boolean |
| `alignRight` | Should button stretch to left | `false` | boolean |
| `stretchPadding` | Padding of stretched button | 25 | number |
| `zDepth` | Set zDepth of button, whose range is [0,5] | 2 | number |
| `transitionDuration` | Duration time of button stretching (ms) | 250 | number |
| `emergeDelay` | Delay time of component emerging | 100 | number |
| `onMouseEnter` | Will be invoked each time mouse enters button | `null` | function |
| `onMouseLeave` | Will be invoked each time mouse leaves button | `null` | function |
| `componentDisplayed` | Component displayed before button is stretched | `null` | node |
| `componentToDisplay` | Component to display after button is stretched | `null` | node |

## Development Setup

  * Clone the repo: `git clone https://github.com/zianke/react-stretchable-button.git`
  * Install the dependencies: `cd react-stretchable-button && npm install`
  * Start webpack: `npm start`
  * Modify `example/index.js` and open `example/index.html`
