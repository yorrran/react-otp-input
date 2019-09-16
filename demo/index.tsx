import * as React from 'react';
import * as ReactDOM from 'react-dom';
import OtpInput from '../lib/otp-input';

class Demo extends React.Component {
  render() {
    return (
      <div>
        <div>demo</div>
        <OtpInput
          codeLength={4}
          onInputChange={value => {
            console.log(value);
          }}
        />
      </div>
    );
  }
}
ReactDOM.render(<Demo />, document.getElementById('root'));
