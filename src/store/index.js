import { createStore, applyMiddleware, compose } from 'redux' // 一、引入redux中间件
import thunk from 'redux-thunk' // 二、依赖redux-thunk模块
import reducer from './reducer'

// 同时使用两个中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(
  applyMiddleware(thunk)
)

// 整个应用只能有一个store作为公共存储空间
const store = createStore(// 创建公共存储仓库,传递reducer
  reducer,
  enhancer
) 

export default store