import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {restaurantListReducer} from './Reducers/restuarantReducer'

const reducers =combineReducers({
    restuarantReducer:restaurantListReducer
})
//create middleware
const middleware=[thunk]
//store

const store=createStore(reducers,applyMiddleware(...middleware))

export default store