import React from 'react';
import './login.css';
import logo from '../../images/LogoRed.png';

function login() {
    return (
        <div className='login'>
            <img src={logo} alt='logo red social' className='iconoRed'></img>
            <h1 className='title'>Login</h1>
            <div className='loginArea'>
                <form>
                    <input placeholder='Email'></input>
                    <input placeholder='Usuario'></input>
                    <input placeholder='Password'></input>
                    <button>Iniciar sesión</button>
                </form>
            </div>
        </div>
    );
}
export default login; 
