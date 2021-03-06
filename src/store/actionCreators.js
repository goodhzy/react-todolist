import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM,INIT_LIST} from './actionTypes'

export const getInputChangeAction = (value)=>({
    type: CHANGE_INPUT_VALUE,
    value
})

export const getAddItemChangeAction = (list)=>({
    type: ADD_TODO_ITEM,
    list
})

export const getDelItemChangeAction = (index)=>({
    type: DEL_TODO_ITEM,
    index
})

export const getInitListChangeAction = (list)=>({
    type: INIT_LIST,
    list
})
