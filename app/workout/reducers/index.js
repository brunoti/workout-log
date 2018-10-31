import { combineReducers } from 'redux';

export default combineReducers({
  detail: require('./detail').default,
  list: require('./list').default,
});
