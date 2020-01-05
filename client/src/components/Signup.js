import React, { Component } from 'react';
import axios from 'axios';
import styles from '../styles/signup.module.css';

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            confirmationPassword: ''
        };
    
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleConfirmationPwChange = this.handleConfirmationPwChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Username:
                    <input type="text" name="Username" placeholder="Username" onChange={this.handleUsernameChange} />
                    </label>
                    Password:
                    <input type="password" name="Password" placeholder="Password" onChange={this.handlePasswordChange} />
                    Confirm:
                    <input type="password" name="ConfirmPassword" placeholder="Confirm password" onChange={this.handleConfirmationPwChange} />
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }

    handleSubmit = (event) => {
        if(this.state.password === this.state.confirmationPassword) {
            event.preventDefault();
            this.addAccount(this.state);
            const { history } = this.props;
            history.push("/userpage");
        }
    }

    handleUsernameChange = (event) => {
        this.setState({username: event.target.value});
    }

    handlePasswordChange = (event) => {
        this.setState({password: event.target.value}); 
    }

    handleConfirmationPwChange = (event) => {
        this.setState({confirmationPassword: event.target.value});
    }

    addAccount = (state) => {
        axios.post('http://localhost:3001/api/addAccount', {
            username: this.state.username,
            password: this.state.password
        });
    }
}   

export default Signup
