import React from 'react';
import { Redirect } from 'react-router-dom';

export default props => {
  const { login, auth } = props;
  const { from } = props.location.state ? props.location.state : { from: '/' };
  return !auth.isAuthenticated
    ? <div>
        <p className="App-intro">
          <button onClick={login}>Fake Login</button>
        </p>
      </div>
    : <Redirect to={from} />;
};
