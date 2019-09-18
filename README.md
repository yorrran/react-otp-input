# React otpinput

[![npm_version]][npmv-image]][npmv-url]

## Installation

To install the latest version:

```
npm install --save react-optinput
```

Basic usage:

```typescript
import React from 'react';
import ReactDOM from 'react-dom';
import OtpInput from 'react-optinput';
import './bundle.css';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <OtpInput
          codeLength={5}
          onInputChange={value => {
            console.log(value);
          }}
        />
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById('root'));
```

## API

<table>
  <tr>
    <th>Name<br></th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>codeLength</td>
    <td>number</td>
    <td><strong>true</strong></td>
    <td>4</td>
    <td>number of input length</td>
  </tr>
  <tr>
    <td>onInputChange</td>
    <td>function</td>
    <td>no</td>
    <td>''</td>
    <td>input event when input needs to be passed to parent component</td>
  </tr>
  <tr>
    <td>disable</td>
    <td>boolean</td>
    <td>no</td>
    <td>''</td>
    <td>disable inputs</td>
  </tr>
</table>

## First beta v1.1.0

This beta version is created to demostrate implementing otp/code/pin code input with react in a simpler. The demo is created using webpack as building base. The package is packed with rollup. It was initially packed using webpack. During the stage of experiements, rollup shows a clear and simpler manner in module bundler.
Dev dependencies and peer dependencies are available for reference in react-optinput. You may need peer dependecies react and react-dom for development purpose. Currently, default style is provided with import './bundle.css'.

## For you to try

To run the development server:

```
npm run dev
```

## Checklist

-[x] Add ESlint, Prettier for code quality -[ ] Customize style support -[ ] CI -[ ] Unit tests

## License

MIT

[npmv-image]: https://img.shields.io/npm/v/react-optinput.svg?style=flat-square
[npmv-url]: https://www.npmjs.com/package/react-optinput
