import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DEL_TODO_ITEM,INIT_LIST} from './actionTypes'
import axios from 'axios'

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

export const getTodoList = ()=>{
    return (dispatch)=>{
        axios.get('http://localhost:8000/list').then(res=>{
            const data = res.data.data
            const action = getInitListChangeAction(data)
            dispatch(action)
        })
    }
}