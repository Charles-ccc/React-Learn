import {CHANGE_INPUT, ADD_TODOITEM, DELETE_TODOITEM, INIT_LIST_ACTION } from './actionTypes'

// state store仓库里存的数据
const defaultState = {
  inputValue: '',
  list: []
}

// reducer 必须返回函数
// 参数state是拿到上一次state数据，参数ction接收dispatch传过来的action数据
export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      return { ...state, inputValue: action.value } // 深拷贝，拒绝直接修改state
    case ADD_TODOITEM:
      const newInput = JSON.parse(JSON.stringify(state))
      newInput.list.push(newInput.inputValue)
      newInput.inputValue = ''
      return newInput
    case DELETE_TODOITEM:
      const newState = JSON.parse(JSON.stringify(state))
      newState.list.splice(action.index, 1) // 删除下标对应的内容
      return newState
    case INIT_LIST_ACTION:
    return { ...state, list: action.data }
    default:
      return state
  }
}