import React from 'react';
import ReactDOM from 'react-dom';
import OtpInput from '../src/index';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div>demo</div>
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
