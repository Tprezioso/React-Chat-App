import React, { Component } from 'react'
import UsernameForm from './components/UsernameForm';

class App extends Component {
  constructor() {
    super()
    this.onUsernameSubmitted = this.onUsernameSubmitted.bind(this)
  }
  onUsernameSubmitted (username) {
    fetch('http://localhost:3001/users',{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify({username})
    }).then(response => {
      console.log('sucess')
    }).catch( error => {
      console.error(error)
    })
  }
  render() {
    return <UsernameForm onsumbit ={this.onUsernameSubmitted}/>
  }
}

export default App
