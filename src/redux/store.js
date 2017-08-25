import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

function baselineMiddleware() {
  //Disable redux log for prod

  if (
    process.env.REACT_APP_REDUX_DEBUGGING_ENABLED === 'false' ||
    !process.env.REACT_APP_REDUX_DEBUGGING_ENABLED
  ) {
    return applyMiddleware(thunkMiddleware);
  }
  return applyMiddleware(thunkMiddleware, createLogger());
}

export default initalState => {
  const enhancers =
    process.env.REACT_APP_REDUX_DEBUGGING_ENABLED === 'true'
      ? composeWithDevTools(baselineMiddleware())
      : baselineMiddleware();

  const store = createStore(rootReducer, initalState, enhancers);
  return store;
};
