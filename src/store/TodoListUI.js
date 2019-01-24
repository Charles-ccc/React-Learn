import React from 'react' // 无状态组件不需要{Component}
import { Input, Button, List } from 'antd'

// UI组件如果只负责渲染，那么是可以转为无状态组件的
// 当一个普通组件只有render函数的时候，就可以转为无状态组件
// 无状态组件性能更高，因为只是一个函数，不需要执行生命周期函数，也不需要执行render函数。
const TodoListUI = (props) => {
  return (
    <div>
      <div style={{marginTop: '20px', marginLeft: '20px'}}>
        <Input 
          placeholder="Hello World"
          value={props.inputValue} 
          onChange={props.handleInputChange}
          style={{width: '300px', marginRight: '16px'}} />
        <Button type="primary" onClick={props.handleBtnClick}>submit</Button>
      </div>
      <List 
        style={{width: '300px', marginTop: '20px', marginLeft: '20px'}} 
        bordered 
        dataSource={props.list} 
        renderItem={(item, index) => (<List.Item onClick={() => {props.handleItemDelete(index)}}>{item}</List.Item>)} 
      />
    </div>
  )
}
// class TodoListUI extends Component {
//   render() {
//     return (
//       <div>
//         <div style={{marginTop: '20px', marginLeft: '20px'}}>
//           <Input 
//             placeholder="Hello World"
//             value={this.props.inputValue} 
//             onChange={this.props.handleInputChange}
//             style={{width: '300px', marginRight: '16px'}} />
//           <Button type="primary" onClick={this.props.handleBtnClick}>submit</Button>
//         </div>
//         <List 
//           style={{width: '300px', marginTop: '20px', marginLeft: '20px'}} 
//           bordered 
//           dataSource={this.props.list} 
//           renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>)} 
//         />
//       </div>
//     )
//   }
// }
export default TodoListUI