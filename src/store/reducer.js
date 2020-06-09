import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM} from './actionTypes'

const defaultState = {
  inputValue: "",
  list: [],
};

// reducer可以接受state, 但是不能修改state
export default (state = defaultState, action) => {
  
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }
  if (action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.list;
    newState.inputValue = "";
    
    return newState;
  }
  if(action.type === DEL_TODO_ITEM){
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(state.index,1)
      
      return newState 
  }
  return state;
};
