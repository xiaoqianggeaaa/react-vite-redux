
import {actionType} from './actionType'
const defaultState = {
    enterLoading: true
  }
  
  export const reducer = (state=defaultState, action) => {
    console.log(action)
      switch(action.type) {
        case actionType.INCREMENT:
          return {
            ...state,
           ...action
          }
        case actionType.DECREMENT:
          return{
            ...state,
            enterLoading:action.data
          }
        default:
          return state;
      }
    }
  