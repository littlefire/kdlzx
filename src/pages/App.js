import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'

export default class App extends Component {
    render() {
        return (
                // <LoginPage></LoginPage>
                <HomePage></HomePage>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById("root"));
