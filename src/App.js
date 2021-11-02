import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
// import Counter from './components/Counter'
import Login from './components/Login'
import Home from './components/Home'
import ProtectedRoute from './components/ProtectedRoute'
import './App.css'

const sortByOptions = [
  {
    id: 0,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]
class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute
          exact
          path="/"
          component={Home}
          sortByOptions={sortByOptions}
        />
      </Switch>
    )
  }
}

export default App
