import {configureStore} from '@reduxjs/toolkit'
import BookReducer from './BookReducer'

const store = configureStore({reducer:BookReducer});

export default store;