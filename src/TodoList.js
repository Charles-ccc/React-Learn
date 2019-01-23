import React, {Component} from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
import store from './store/index'
import {CHANGE_INPUT, ADD_TODOITEM, DELETE_TODOITEM} from './store/actionTypes'

class TodoList extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    store.subscribe(this.handleStoreChange) // 订阅store，只要store发生改变，就执行函数
  }
  
  render() {
    return (
      <div>
        <div style={{marginTop: '20px', marginLeft: '20px'}}>
          <Input placeholder="Hello World"
                  onChange={this.handleInputChange}
                  value={this.state.inputValue} 
                  style={{width: '300px', marginRight: '16px'}} />
          <Button type="primary" onClick={this.handleBtnClick}>submit</Button>
        </div>
        <List style={{width: '300px', marginTop: '20px', marginLeft: '20px'}} bordered dataSource={this.state.list} renderItem={(item, index) => (<List.Item onClick={this.handleItemDelete.bind(this, index)}>{item}</List.Item>)} />
      </div>
    )
  }

  handleInputChange(e) {
    const action = {
      type: CHANGE_INPUT, // 描述
      value: e.target.value
    }
    store.dispatch(action)
  }
  handleStoreChange() {
    // 当store发生变化时，调用store的getState方法重新获取一次数据
    // 然后调用setState方法去修改state
    this.setState(store.getState())
  }
  handleBtnClick() {
    const action = {
      type: ADD_TODOITEM,
    }
    store.dispatch(action)
  }
  handleItemDelete(index) {
    // 删除store对应下标的内容
    const action = {
      type: DELETE_TODOITEM,
      index
    }
    store.dispatch(action)
  }
}

export default TodoList