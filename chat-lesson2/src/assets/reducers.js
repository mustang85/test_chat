import { combineReducers } from 'redux';

const usersState = ['@john_123', '@alex_1989', '@chris'];
const messagesState = [
  {
    text: 'Hello world',
    datetime: 1486912946322,
    author: '@alex_1989'
  },
  {
    text: 'Hi, Alex!',
    datetime: 1486912996322,
    author: '@chris'
  }
];

const usersReducer = (state = usersState, action) => {
  console.log('action usersReducer', action);
  if (action.type === 'ADD_NEW_USER') {
    return state.concat(action.username)
  }
  return state;
}

const messagesReducer = (state = messagesState, action) => {
  console.log('action messagesReducer', action);
  if (action.type === 'ADD_NEW_MESSAGE') {
    return [
      ...state,
      {
        text: action.text,
        datetime: action.datetime,
        author: action.author
      }
    ]
  }
  return state;
}

export default combineReducers({
  usersReducer,
  messagesReducer
})
