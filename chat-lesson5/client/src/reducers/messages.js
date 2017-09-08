import { getFakeData } from 'utils';

const initialState = getFakeData('lorem.words');

const messagesReducer = (state = initialState, action) => {
  return state;
}

export default messagesReducer;
