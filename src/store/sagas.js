import { put, takeEvery } from 'redux-saga/effects'
import { GET_INIT_LIST } from './actionTypes'
import { initListAction } from './actionCreators'
import axios from 'axios'

function* getInitList() {
  try{
    const res = yield axios.get('/todolist.json')
    const action = initListAction(res.data)
    yield put(action) // saga里面没有 store.dispatch，用自带put方法派发给reducer
  }catch(e) {
    console.log('todolist.json 网络请求失败')
  }
}
function* todoSagas() {
  // 声明接收名为 GET_INIT_LIST 的action
  yield takeEvery(GET_INIT_LIST, getInitList)
}
export default todoSagas