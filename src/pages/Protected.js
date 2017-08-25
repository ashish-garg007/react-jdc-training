import React from 'react';

export default props => {
  const { actions } = props;
  return (
    <div>
      <p className="App-intro">
        <button onClick={actions.logout}>Logout</button>
      </p>
    </div>
  );
};
