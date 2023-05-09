import React from 'react'
import { Provider } from 'react-redux'
import store from './ReduxContainer/Store'

const App = () => {
  return (
    <Provider store={store}>
    <div>
      <h2>Welcome to React Redux</h2>
    </div>
    </Provider>
  )
}

export default App
