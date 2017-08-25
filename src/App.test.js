import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provide } from 'react-redux';
import configureStore from './redux/store';
const store = configureStore();

it('renders without crashing', () => {
  // Jest uses jsdom as default environment. document and window are globally available
  const div = document.createElement('div');
  window.localStorage = {};

  ReactDOM.render(
    <Prvider store={store}>
      <App />{' '}
    </Prvider>,
    div
  );
});
