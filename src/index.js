import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {Route, Switch, Router, Redirect} from 'react-router-dom'
import history from './components/History'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import '../style/style.css'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers)

const App = () => {
  return (
    <div>
      Hi!
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
      <Router history={history} >
        <div>
          <Switch>
            <Route exact path="/" component={App} />
            <Route path="*" render={() => <Redirect to="/" />} />
          </Switch>
        </div>
      </Router>
  </Provider>
  , document.getElementById('root'))
