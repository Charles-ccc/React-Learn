import React, {Component} from 'react'
import 'antd/dist/antd.css'
import store from './store/index'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, initListAction } from './store/actionCreators'
import TodoListUI from './store/TodoListUI'
import axios from 'axios'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    this.handleItemDelete = this.handleItemDelete.bind(this)
    store.subscribe(this.handleStoreChange) // 订阅store，只要store发生改变，就执行函数
  }
  render() {
    return (
      <TodoListUI 
        list={this.state.list}
        inputValue={this.state.inputValue} 
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItemDelete={this.handleItemDelete}
      />
    )
  }

  componentDidMount () {
    axios.get('/todolist.json').then((res) => {
      const data = res.data
      const action = initListAction(data)
      console.log(action)
      store.dispatch(action)
    })
  }

  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleStoreChange() {
    // 当store发生变化时，调用store的getState方法重新获取一次数据
    // 然后调用setState方法去修改state
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action)
  }
  handleItemDelete(index) {
    // 删除store对应下标的内容
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }
}

export default TodoList