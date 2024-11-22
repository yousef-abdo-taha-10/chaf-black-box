import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const [successMessage, setSuccessMessage] = useState('');


    const Validate = () => {
        let tempErrors = {};
        if (!name) {
            tempErrors.name = "Username is required";
        }
        if (!email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            tempErrors.email = "*Email is invalid*";
        }
        if (!password) {
            tempErrors.password = 'Password is required ';
        }
        else if (password.length < 6) {
            tempErrors.password = "Password must be at least 6 characters";
        }

        setError(tempErrors);
        return Object.keys(tempErrors).length === 0;

    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (Validate()) {
        try {
         const response = await axios.post('',{
            name,
            email,
            password
         });
         console.log(response.data);
         setSuccessMessage('Account created successfully!');
        
        }catch(error){
            console.error(error);
            setError({server: 'Failed to create account. Please try again later.'})

        }
            console.log(name, email, password);
        }

    }



    return (
        <div className='reg'>
            <>
                <h2 className='hh2'>Create Your Account</h2>
                <p className="register-par">Enjoy ordering your favorite meal 
                <br/>and eating it.</p>
                <form onSubmit={handleSubmit} method='post'>
                    
                    <br />
                    <input type='text' placeholder='Username' value={name} onChange={(e) => setName(e.target.value)} className='usernames' />
                    {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
                    <br />

                   
                    
                    <input type='email' placeholder='Email  Address' value={email} onChange={(e) => setEmail(e.target.value)} className='emails' />
                    {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
                    <br />

                    
                   
                    <input type='password' placeholder='Create Password' value={password} onChange={(e) => setPassword(e.target.value)} className="passwords" />
                    {error.password && <p style={{ color: 'red' }}>{error.password}</p>}
                    <br />
                    <input type='checkbox' className='register-box' id='register-boxx' />
                    <label className='register-remember1' for="register-boxx">I agree with <span className='register-remember'>Terms&Condition</span> of Chef</label>
           <br/>
           <button type="submit" className='register-btn'>Sign up</button>
          <br/>
          <button type="submit" className='register-btn2'>
          <div className='google2'>
           <img src="Images\icons8-google.svg" alt='google2'/>
           </div>
            Sign in with Google</button>
          <p className='register-par2'>Already have an account? <span className='register-sign'>Sign in</span> </p>
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    {error.server && <p style={{ color: 'red' }}>{error.server}</p>}
                </form>












            </>
        </div>
    )
}

export default Register