import React from 'react';
import logo from '../logo.svg';

export default props => {
  const { title, onHeaderClick } = props;
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a href="/" onClick={onHeaderClick} id="logo">
        <h2>
          {title}
        </h2>
      </a>
    </div>
  );
};