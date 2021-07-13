import { createStore, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { productReducer } from './reducer/productReducer'

const reducer = combineReducers({
  product: productReducer,
})

const store = createStore(reducer, composeWithDevTools())

export default store
