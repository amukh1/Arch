import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import './login.css'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
        <div className="loginbox">
            <div className="loginHeaderText">
                Log In
            </div>
            <div className="loginForm">
                <input type="text" className="username" placeholder='amukh1'/>
                <div></div>
                <input type="password" className="password" placeholder='Password'/>
                <div></div>
                <button className="loginButton" onClick={login}>Log In</button>
                <button className="loginButton" onClick={signup}>Sign up</button>
            </div>

        </div>
	</React.StrictMode>
)

function login(){
    let username = document.querySelector('.username').value
    let password = document.querySelector('.password').value
    alert(`Logging in as > Username: ${username} Password: ${password}`)
}

function signup(){
    let username = document.querySelector('.username').value
    let password = document.querySelector('.password').value
    alert(`Signing up for > Username: ${username} Password: ${password}`)
}