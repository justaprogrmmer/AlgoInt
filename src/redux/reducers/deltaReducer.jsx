import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function deltaReducer(state = initialState, action) {
  switch (action.type) {
    case (types.SIGN_IN): {
      return Object.assign({}, state, { ...state, signedIn: true });
    }

    case (types.SIGN_OFF): {
      return Object.assign({}, state,  { ...state, signedIn: false });
    }

    case (types.SET_CURRENT_QUESTION): {
      return Object.assign({}, state,  { ...state, currentQuestion: action.currentQuestion });
    }

    case (types.SET_QUESTION_QUEUE): {
      return Object.assign({}, state,  { ...state, questionQueue: action.questionObject });
    }

    case (types.SET_QUESTION_OBJECT): {
      // console.log(state)
      return Object.assign({}, state,  { ...state, questionsObject: state.questionsObject.concat(action.questionObject) });
    }

    case (types.SET_USERNAME): {
      // console.log(state)
      return Object.assign({}, state,  { ...state, username: action.username });
    }

    default:
      return state;
  }
}

