import React from 'react'
import axios from 'axios'
import './login.css'
import FieldGroup from '../Fieldgroup'
import { Message } from '../Message/message'
import { Redirect } from 'react-router-dom'

class Login extends React.Component {
    state = {
        username: '',
        password: '',
        redirect: false,
        error: false,
        errorMessage: ''
    }

    componentDidMount() {
        localStorage.removeItem('JWT')
    }

    handleInput = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    handleSubmit = e => {
        e.preventDefault()

        if (this.state.username === '' || this.state.password === '') {
            this.setState({
                showError: false,
                showNullError: true,
                loggedIn: false,
            });
        } else {
            axios.post('/loginUser',
                {
                    username: this.state.username,
                    password: this.state.password
                }
            ).then(response => {
                if (response.data === 'Login failed') {
                    console.log(response);
                    this.setState({
                        redirect: false,
                        error: true,
                        errorMessage: response.data
                    });
                } else {
                    console.log('successful login');
                    localStorage.setItem('JWT', response.data.token);
                    this.setState({
                        loggedIn: true,
                        redirect: true
                    });
                }
            })
                .catch(error => {
                    console.log(error.data);
                });
        }
    }

    render() {
        if (this.state.redirect === true) {
            return <Redirect to='/home' />
        }

        return (
            <div>
                <div className="gradient-background">
                    <div className="login-div">
                        <div className="bbstyle login-div container">
                            <h3 className="login-h3">LOG IN</h3>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <form className='inputForm' >
                                        <FieldGroup
                                            name='username'
                                            id='nameArea'
                                            value={this.state.username}
                                            onChange={this.handleInput}
                                            placeholder='username'
                                        />
                                        <FieldGroup
                                            name='password'
                                            type='password'
                                            id='password'
                                            value={this.state.password}
                                            onChange={this.handleInput}
                                            placeholder='password'
                                        />
                                    </form>
                                </div>
                            </div>
                            <input id='submit' type='submit' value='SUBMIT' onClick={this.handleSubmit} />
                            <span><a href='/signup'> Sign Up </a> </span>
                            <br />
                            {this.state.error ? <Message key='1'> {this.state.errorMessage} </Message> : null}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;