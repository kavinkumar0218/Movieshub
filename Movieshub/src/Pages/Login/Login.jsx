import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/bmmu.jpg';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [signState, setSignState] = useState("Sign In");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        navigate('/Home');
    };

    return (
        <div className='login'>
            <img src={logo} className='login-logo' alt='' />
            <div className="login-form">
                <h1 style={{ color: 'white' }}>{signState}</h1>
                <form onSubmit={handleSubmit}>
                    {signState === "Sign Up" ? <input type='text' placeholder='Your name' /> : null}
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <button type="submit">{signState}</button>
                    <div className="form-help">
                        <div className="remember">
                            <input type='checkbox' />
                            <label htmlFor=''>Remember me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signState === "Sign In" ?
                        <p>New to Netflix<span onClick={() => { setSignState("Sign Up") }}> Sign Up Now</span></p> :
                        <p>Already have an account?<span onClick={() => { setSignState("Sign In") }}> Sign In Now</span></p>
                    }
                </div>
            </div>
        </div>
    );
};
