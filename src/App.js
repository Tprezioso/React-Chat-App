import React, { Component } from 'react'
import UsernameForm from './components/UsernameForm';

class App extends Component {
  render() {
    return <UsernameForm onSumbit ={username => alert(username)}/>
  }
}

export default App
