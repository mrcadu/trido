import { combineReducers } from 'redux'
import tabsReducer from './tabsReducer'
import loadingReducer from './loadingReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    form: formReducer,
    tabsReducer,
    loadingReducer
})