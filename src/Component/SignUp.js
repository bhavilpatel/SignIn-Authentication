import React, { useState } from 'react';
import './SignUp.css'
import { Link } from 'react-router-dom';
import { ref, push } from 'firebase/database';
import { db } from './Firebase';

function SignUp() {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function submit() {
        var pattern = /[^\s@]+@[^\s@]+\.[^\s@]+/;
        if (userName.length >= 3 && email.match(pattern) && password.length >= 8) {

            push(ref(db, "test"), { userName: userName, email: email, password: password })

            console.log("userName: " + userName)
            console.log("email: " + email)
            console.log("password: " + password)
            document.getElementById("userError").style.display = "none"
            document.getElementById("emailError").style.display = "none"
            document.getElementById("passError").style.display = "none"
        } else {
            document.getElementById("userError").style.display = "block"
            document.getElementById("emailError").style.display = "block"
            document.getElementById("passError").style.display = "block"
        }
    }

    return (
        <div>
            <form action=''>
                <div className='form'>
                    <h1>Sign Up</h1>
                </div>
                <div className='data'>
                    <div className='inputs'>
                        <label htmlFor='email'>UserName:</label>
                        <input
                            type='text'
                            value={userName} id='email'
                            onChange={(e) => setUserName(e.target.value)}
                            placeholder='Enter your UserName'></input>
                        <div id='userError' className='error'>Enter your username</div>
                    </div>
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
                        <button type='button' id='submit' onClick={submit} >Sign Up</button>
                    </div>
                    <div className='link'>
                        <Link to="/">Alredy have a account?</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp