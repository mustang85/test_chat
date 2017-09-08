import { combineReducers } from 'redux';
import messagesReducer from './messages';
import peopleReducer from './people';

export default combineReducers({
  messagesReducer,
  peopleReducer
});
