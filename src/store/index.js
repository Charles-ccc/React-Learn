import { createStore } from 'redux'
import reducer from './reducer'

// 整个应用只能有一个store作为公共存储空间
const store = createStore(// 创建公共存储仓库,传递reducer
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // redux devtools
) 

export default store