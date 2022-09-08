import React, { MouseEventHandler } from 'react';
import * as buttonStyles from '../Styles/Button.css';

// type Props = {
//   onClick: MouseEventHandler,
//   text: string,
// }

// const Button = ({onClick, text} : Props) => (
const Button = (onClick: MouseEventHandler, text : string) => (
  <button onClick={onClick} className={buttonStyles}>
    {text}
  </button>
)

export default Button