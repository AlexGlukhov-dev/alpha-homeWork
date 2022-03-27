import {configureStore} from '@reduxjs/toolkit'
import appDataReducer from './slices/appData'

export default configureStore( {
    reducer: {
        data: appDataReducer,
    }
})