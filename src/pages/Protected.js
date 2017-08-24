import React from 'react';

export default props => {
  const { logout } = props;
  return (
    <div>
      <p className="App-intro">
        <button onClick={logout}>Logout</button>
      </p>
    </div>
  );
};
