import React, { useState } from 'react';
import './style.scss';

interface IProps {
  disabled?: boolean;
  codeLength: number;
  onInputChange: (value: string) => void;
}

const BACKSPACE = 8;
const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;

const CodeInput = (props: IProps) => {
  const [activeInput, setActiveInput] = useState(0);
  const [otp, setOtp] = useState<Array<string>>(
    Array(props.codeLength).fill('')
  );

  /**
   * current input cell value
   * @param value
   * @return join cell value as string
   */
  const changeCodeAtFocus = (value: string) => {
    const newOtp = [...otp];
    newOtp[activeInput] = value;
    setOtp(newOtp);
    props.onInputChange(newOtp.join(''));
  };

  /**
   * focus input in the range of 0 to code length
   * Math.min ensure focus within the upperbound
   * Math.max ensure focus within the lowerbound
   * @param input target index
   */
  const focusInput = (input: number) => {
    const activeInput = Math.max(Math.min(props.codeLength - 1, input), 0);
    setActiveInput(activeInput);
  };

  const focusPreInput = () => {
    if (activeInput > 0) {
      const preInput = activeInput - 1;
      focusInput(preInput);
    }
  };

  const focusNextInput = () => {
    if (activeInput < props.codeLength - 1) {
      const nextInput = activeInput + 1;
      focusInput(nextInput);
    }
  };

  /**
   * support three type of key events backspace, left, right
   * @param e
   */
  const onKeydown = (e: React.KeyboardEvent) => {
    switch (e.keyCode) {
      case BACKSPACE:
        e.preventDefault();
        changeCodeAtFocus('');
        focusPreInput();
        break;
      case LEFT_ARROW:
        e.preventDefault();
        focusPreInput();
        break;
      case RIGHT_ARROW:
        e.preventDefault();
        focusNextInput();
        break;
      default:
        break;
    }
  };

  const handleFocus = (
    e: React.FocusEvent<HTMLInputElement>,
    index: number
  ) => {
    e.preventDefault();
    focusInput(index);
  };

  /**
   * target input will get value of length two
   * substring to get single target input
   */
  const handleInput = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    const { value } = e.target;
    const targetValue =
      value.length > 1 ? value.charAt(value.length - 1) : value;
    focusNextInput();
    changeCodeAtFocus(targetValue);
  };

  return (
    <div className="code-wrapper">
      {new Array(props.codeLength).fill(null).map((_, index) => {
        return (
          <input
            onFocus={$e => handleFocus($e, index)}
            onKeyDown={$e => onKeydown($e)}
            disabled={props.disabled}
            type="text"
            className={'code' + (activeInput === index ? ' focus' : ' ')}
            key={index}
            value={otp[index]}
            onChange={$e => handleInput($e)}
            autoFocus={index === 0}
          />
        );
      })}
    </div>
  );
};

export default CodeInput;
