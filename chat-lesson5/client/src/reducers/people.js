import { getFakeData } from 'utils';

const initialState = getFakeData('internet.userName');

const peopleReducer = (state = initialState, action) => {
  if (action.type === 'ADD_NEW_USER') {
    return state.concat('@alex'+Date.now())
  }
  return state;
}

export default peopleReducer;
