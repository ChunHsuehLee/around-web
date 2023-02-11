import React, { Component } from 'react'
import logo from '../assets/images/logo.svg';
import { Icon } from 'antd';

export default class TopBar extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <span className='App-title'>Around</span>
                {
                    this.props.isLoggedIn ? 
                    <a className='logout' onClick={this.props.handleLogout}>
                        <Icon type="logout" />
                    </a>
                    : null
                }
            </header>
        )
    }
}
