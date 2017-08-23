import React from 'react';

export default props => {
  const { text } = props;
  return (
    <p className="App-intro">
      {text}
    </p>
  );
};