import React, {useState} from "react";
import axiosWithAuth from '../utilis/axiosWithAuth';
import {Redirect} from 'react-router-dom';


const Login = props => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  

  const handleChange = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      props.history.push('/bubblepage')
    })
    .catch(err=> console.log('Cannot Login', err.response))
  }

  const logout = e => {e.preventDefault();
    axiosWithAuth()
    .post('/api/login', credentials)
    .then(res => {
      localStorage.setItem('token', !res.data.payload);
      props.history.push('/login')
    })
    .catch(err=> console.log('Cannot Logout', err))
  }

  if (localStorage.getItem('token')) return <Redirect to='bubblepage'/>
  
    return (
      <>
        <h1>Welcome to the Bubble App!</h1>
        <div className='form' >
          <form>
            <input type='text' name='username' value={credentials.username} 
            placeholder="username" onChange={handleChange}/>

            <input type='password' name='password' value={credentials.password} placeholder="password" onChange={handleChange}/>

            <button type='submit' onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>

          </form>
        </div>
      </>
    );
};

export default Login;


// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route