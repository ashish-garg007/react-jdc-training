import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return rest.profile.isAuthenticated
          ? rest.render()
          : <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />;
      }}
    />
  );
};
