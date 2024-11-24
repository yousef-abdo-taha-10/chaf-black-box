import React, { useState } from 'react';
import './Login.css';
import {  Link } from 'react-router-dom';
import axios from './axiosConfig';




const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({})
 

  const Validate = () => {
    let tempErrors = {};
    if (!email) {
      tempErrors.email = '**email is required** ';
      
    }
    else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "*Email is invalid*";
    }
    if (!password) {
      tempErrors.password = '**Password is required** ';
    }
    else if (password.length < 6) {
      tempErrors.password = "*Password must be at least 6 characters*";
    }
    setError(tempErrors)
    return Object.keys(tempErrors).length === 0 
  


  }
  const handleSubmit =async(e) => {
    e.preventDefault()
    if (Validate()) {
      try{
        const response = await axios.post('/api/users/login',{email : email , password : password});
        if (response.data.success){
          console.log("login successful")
          const token = response.data.token;
          localStorage.setItem('authToken',token)
          axios.defaults.headers.common['Authorization']=`Bearer ${token}`;
          alert('login successful')
        }else{
         
          setError({ apiError: response.data.message || "Login failed" })
        }
      }catch(error){
        setError({apiError:'try again'});
  ;
      }
      console.log(email, password)
      setEmail('');
      setPassword('');
      
    }
  }
  return (
    <div className='loginn'>
      <>
       <h1>Sign in to your account</h1>
       <p className="first-par">Enjoy ordering your favorite meal 
        <br/>and eating it.</p>
        <form onSubmit={handleSubmit}>
         
         
          <input type='email' name='email'  placeholder='Your Email' value={email} className="em" onChange={(e) => setEmail(e.target.value)}/>
          {error.email && <p style={{ color: 'red' ,border:'1px solid red',width:'350px',height:'40px',marginLeft:'45px' }}>{error.email}</p>}
          <br />
         
      
          <input type='password' placeholder='Your password' value={password} onChange={(e) => setPassword(e.target.value)} className="password" name='password' />
          {error.password && <p style={{ color: 'red',border:'1px solid red',width:'350px',height:'40px',marginLeft:'45px' }}>{error.password}</p>}

          <br />
        
           <input type='checkbox' className='box' id='boxx' />
           <label className='remember1' for="boxx">Remember me <span className='remember'>Forget password?</span></label> 
           
           <br />
         
           {error.apiError && <p style={{color:'red'}}>{error.apiError}</p>}
      
      

         

          <br />
          
          <button type="submit" className='bbb'>Sign in</button>
          <br/>
          <button type="submit" className='button-btn'>
           <div className='google'>
           <img src="icons\icons8-google.svg" alt='google'/>
           </div>
            Sign in with Google</button>
         
          <Link to="./register" className="link-login">
                    <p className="last-par">
                        Don't have an account? <span className="sign">Sign up</span>
                    </p>
                </Link>

       </form>  



      













      </>






    </div>
  )
}

export default Login