import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';




const Login = () => {

  const [name, setName] = useState(' ')
  const [password, setPassword] = useState(' ')
  const [error, setError] = useState({})
 

  const Validate = () => {
    let tempErrors = {}
    if (!name) {
      tempErrors.name = '*Name is required* '
    }
    else if (name.length <3) {
      tempErrors.name = "*Name must be at least 4 characters*";
    }
    if (!password) {
      tempErrors.password = 'Password is required ';
    }
    else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    setError(tempErrors)
    return Object.keys(tempErrors).length === 0 
  


  }
  const handleSubmit =async(e) => {
    e.preventDefault()
    if (Validate()) {
      try{
        const response = await axios.post('/api/auth/login',{name : name , password : password});
        if (response.data.success){
          console.log("login successful")
        }else{
          setError({apiError : "login failed}"});
        }
      }catch(error){
        setError({apiError:'try again'});
      }
      console.log(name, password)
      setName('');
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
         
          {/* <input type="text" name="name"  value={name}  placeholder='username' className="username" onChange={(e) => setName(e.target.value)} /> */}
          <input type='text'  placeholder='Username' className="username" onChange={(e) => setName(e.target.value)}/>
          {error.name && <p style={{ color: 'red' ,border:'1px solid red',width:'350px',height:'40px',marginLeft:'75px' }}>{error.name}</p>}
          <br />
         
          <br />
          <input type='password' placeholder='Your Password'  className="password" onChange={(e) => setPassword(e.target.value)}  />
          {error.password && <p style={{ color: 'red',border:'1px solid red',width:'350px',height:'40px',marginLeft:'75px' }}>{error.password}</p>}
          <br />
        
           <input type='checkbox' className='box' id='boxx' />
           <label className='remember1' for="boxx">Remember me <span className='remember'>Forget password?</span></label> 
           
           <br />
         
           {error.apiError && <p style={{color:'red'}}>{error.apiError}</p>}
      
      

         

          <br />
          
          <button type="submit" className='bbb'>Sign in</button>
          <br/>
          <button type="submit" className='btn'>Sign in with Google</button>
          <p className='last-par'>Don't have an account <span className='sign'>Sign up</span> </p>
          {/* <a href ="/Register" className='linkk'>ليس لديك حساب؟ <span>انشئ الان</span></a> */}

       </form>  



      













      </>






    </div>
  )
}

export default Login