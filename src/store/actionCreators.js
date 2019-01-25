import { CHANGE_INPUT, ADD_TODOITEM, DELETE_TODOITEM, INIT_LIST_ACTION, GET_INIT_LIST } from './actionTypes'
// import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT, // 描述
  value
})
export const getAddItemAction = (value) => ({
  type: ADD_TODOITEM
})
export const getDeleteItemAction = (index) => ({
  type: DELETE_TODOITEM,
  index
})
export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
})
export const getInitList = (data) => ({
  type: GET_INIT_LIST
})

// 使用thunk之后，action可以返回函数
// export const getTodoList = () => {
// // 当返回是函数的时候，能自动接收到store的dispatch方法
//   return (dispatch) => {
//     axios.get('/todolist.json').then((res) => {
//       const data = res.data
//       const action = initListAction(data)
//       dispatch(action)
//     })
//   }
// }
