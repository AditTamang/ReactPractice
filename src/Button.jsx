import React from 'react';
import './Button.css'; // Import CSS for button

const Button = ({ text }) => {
  return (
    <button class="button">
      {text}
    </button>
  )
}

export default Button
