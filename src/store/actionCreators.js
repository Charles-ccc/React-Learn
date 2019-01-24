import { CHANGE_INPUT, ADD_TODOITEM, DELETE_TODOITEM, INIT_LIST_ACTION } from './actionTypes'

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