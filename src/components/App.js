import '../styles/App.css';
import TopBar from './TopBar';
import Main from './Main';
import React from 'react';
import { TOKEN_KEY } from '../constants';

class App extends React.Component {
    state = {
        isLoggedIn: Boolean(localStorage.getItem(TOKEN_KEY))
    }
    render() {
        return (
            <div className="App">
                <TopBar isLoggedIn={this.state.isLoggedIn} 
                        handleLogout={this.handleLogout}
                />
                <Main handleLoginSucceed={this.handleLoginSucceed}
                    isLoggedIn={this.state.isLoggedIn}
                    />
            </div>
        );
    }
    handleLogout = () => {
        localStorage.removeItem(TOKEN_KEY);
        this.setState({
            isLoggedIn: false
        })
    }

    handleLoginSucceed = (token) => {
        localStorage.setItem(TOKEN_KEY, token)
        this.setState({ isLoggedIn: true });
    } 
}

export default App;
