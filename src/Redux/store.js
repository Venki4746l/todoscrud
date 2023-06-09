import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './rootReducer';
import logger from 'redux-logger'

const middleware=[thunk]

 const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleware,logger)))
 export default store