import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn && <button>Login</button>}
        {!isLoggedIn && <button>Logout</button>}
      </div>
    )
  }
}

export default App
