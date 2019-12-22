import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import '../styles/login.css';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="main-container">
                <header>
                    <nav className="navbar">
                        <span className="yeti-home">                        
                            <img className="logo-nav" src="assets/output-onlinepngtools.png" alt="Yeti logo"/>
                            Yeti
                        </span>
                        <ul className="nav-links">
                            <li className="nav-item"><a href="#">Browse</a></li>
                            <li className="nav-item"><a href="#">Sign in</a></li>
                        </ul>
                    </nav>
                </header>
                <main className="login-main">
                    <div className="login-box">
                        <img className="logo-md" src="assets/output-onlinepngtools.png" alt="Yeti logo"/>
                        <form id="login-form" onSubmit={this.handleSubmit}>
                            <div className="form-row">
                                <input type="text" name="Username" placeholder="Username" onChange={this.handleUsernameChange} />
                            </div>
                            <div className="form-row">
                                <input type="text" name="Password" placeholder="Password" onChange={this.handlePasswordChange} />
                            </div>
                            <input id="login-btn" type="submit" value="Login"/>
                            <a href="#">Forgot Password?</a>
                            <a href="#">Don't have an account? Sign up here.</a>
                        </form>
                    </div>
                </main>
            </div>
        )
    }

    handleSubmit = () => {
        if(true) {

        }
        else {
            const { history } = this.props;
            history.push("/userpage");
        }
    }

    handlePasswordChange = () => {
        
    }

    handleUsernameChange = () => {

    }
}

export default Login
