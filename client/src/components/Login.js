import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import styles from '../styles/login.module.css';

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
            <div className={styles["main-container"]}>
                <header>
                    <nav className={styles["navbar"]}>
                        <a href="#" className={styles["yeti-home"]}>                        
                            <img className={styles["logo-nav"]} src="assets/output-onlinepngtools.png" alt="Yeti logo"/>
                            {/* <span className={styles["nav-item"]}><a href="#">Yeti</a></span> */}
                            Yeti
                        </a>
                        <ul className={styles["nav-links"]}>
                            <li className={styles["nav-item"]}><a href="#">Browse</a></li>
                            <li className={styles["nav-item"]}><a href="#">Sign in</a></li>
                        </ul>
                    </nav>
                </header>
                <main className={styles["login-main"]}>
                    <div className={styles["login-box"]}>
                        <img className={styles["logo-md"]} src="assets/output-onlinepngtools.png" alt="Yeti logo"/>
                        <form id={styles["login-form"]} onSubmit={this.handleSubmit}>
                            <div className={styles["form-row"]}>
                                <input type="text" name="Username" placeholder="Username" onChange={this.handleUsernameChange} />
                            </div>
                            <div className={styles["form-row"]}>
                                <input type="password" name="Password" placeholder="Password" onChange={this.handlePasswordChange} />
                            </div>
                            <input id={styles["login-btn"]} type="submit" value="Login"/>
                            <div className={styles["account-help-container"]}>
                                <a href="#" className={styles["account-help"]}>Forgot Password?</a>
                                <a href="#" className={styles["account-help"]}>Don't have an account? Sign up here.</a>
                            </div>
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
