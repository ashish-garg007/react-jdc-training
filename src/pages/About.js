import React from 'react';
import Content from '../components/Content';

export default props => {
  const { setTitle } = props;
  return <Content text="Welcome to /about" setTitle={setTitle} />;
};
