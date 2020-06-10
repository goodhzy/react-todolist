import { takeEvery, put, call} from 'redux-saga/effects'
import {INIT_LIST} from './actionTypes'
import {getInitListChangeAction} from './actionCreators'
import axios from 'axios'

function* getInitList() {
    try{
        const res = yield call(axios.get('http://localhost:8000/list'))
        const action = getInitListChangeAction(res.data.data)
        put(action)
    }catch(e){

    }
}

function* mySaga(){
    yield takeEvery(INIT_LIST, getInitList)
}

export default mySaga;
