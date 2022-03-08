import {createStore} from 'redux'
import rootReducer from '../reducers/rootReducers'
import initialState from '../store/initialStare'

const store = createStore(rootReducer, initialState)

export default store;