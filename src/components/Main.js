import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import Register from './Register'
import Login from './Login'
import Home from './Home'

export default class Main extends Component {
    getLogin = () => {
        return this.props.isLoggedIn ? <Redirect to="/home"/> : <Login handleLoginSucceed={this.props.handleLoginSucceed}/>;
    }
    getHome = () => {
        return this.props.isLoggedIn ? <Home /> : <Redirect to="/login"/>;
    }
 
    render() {
        return (
            <div className='main'>
                <Switch>
                    <Route path="/login" render={this.getLogin}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/home" render={this.getHome}></Route>

                    <Route render={this.getLogin}></Route>
                </Switch>
            </div>
        )
    }
}
