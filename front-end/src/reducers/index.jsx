import {combineReducers} from 'redux'
import userReducer from './userReducer'
import loadingReducer from './loadingReducer'
import musicStoreReducer from './musicStoreReducer'

export default combineReducers({

    user : userReducer,
    loading:loadingReducer,
    musicStore:musicStoreReducer
})