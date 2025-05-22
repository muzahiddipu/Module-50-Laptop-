import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';

const Login = () => {
    const [errorMessage, setErrorMessage]= useState('')

    const handleLogIn = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email);
        const password = e.target.password.value;
        console.log(password);

        setErrorMessage('');

        // create user
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            console.log(result);
        })
        .catch(error => {
            console.log(error);
            setErrorMessage(error.message)
        })
    }
    return (
        <div className=''>
            <div className="card bg-base-100 w-full mx-auto my-4 max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className="text-3xl font-bold">Please Login now!</h1>
                    <form onSubmit={handleLogIn} className='space-y-4'>
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Email" />
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Password" />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </form>
                    {
                        errorMessage && <p className='text-red-600'>{errorMessage}</p>
                    }
                </div>
            </div>
        </div>

    );
};

export default Login;