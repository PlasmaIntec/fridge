import { combineReducers } from 'redux'
import folders from './folders'
import files from './files'

export default combineReducers({
    folders,
    files
})