import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(// 创建公共存储仓库,传递reducer
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  // redux devtools
) 

export default store