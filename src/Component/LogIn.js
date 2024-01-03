import React, { useState } from 'react';
import './LogIn.css';
import { Link } from 'react-router-dom';
import { database } from './Firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";


function LogIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submit() {
        var pattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;
        if (email.match(pattern) && password.length >= 8) {
            // database.ref("data").push({
            //     email: email,
            //     password: password
            // })

            console.log("email: " + email)
            console.log("password: " + password)
            document.getElementById("emailError").style.display = "none"
            document.getElementById("passError").style.display = "none"
        } else {
            document.getElementById("emailError").style.display = "block"
            document.getElementById("passError").style.display = "block"
        }
    }


    return (
        <div>
            <div>
                <form action=''>
                    <div className='form'>
                        <h1>Log In</h1>
                    </div>
                    <div className='data'>
                        <div className='inputs'>
                            <label htmlFor='email'>Email:</label>
                            <input
                                type='email'
                                value={email} id='email'
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder='Enter your email address'></input>
                            <div id='emailError' className='error'>Enter your full email address</div>
                        </div>
                        <div className='inputs'>
                            <label htmlFor='password'>Password:</label>
                            <input type='password'
                                value={password}
                                id='password'
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder='Enter your password'></input>
                            <div id='passError' className='error'>Enter your password</div>
                        </div>
                        <div className='button'>
                            <button type='button' id='submit' onClick={submit} >Log In</button>
                        </div>
                        <div className='link'>
                            <Link to="/signUp">Register</Link>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default LogIn

