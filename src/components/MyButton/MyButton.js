import React from 'react';
import './MyButton.css';

const MyButton = ({ color, children }) => (
  <div className="MyButton" style={{ backgroundColor: color }}>
    {children}
  </div>
);

MyButton.propTypes = {};

MyButton.defaultProps = {};

export default MyButton;
