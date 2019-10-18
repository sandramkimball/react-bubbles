import React from "react";
import axiosWithAuth from '../utilis/axiosWithAuth';


class Login extends React.Component {

  state = {
    credentials: {
      username: '',
      password: ''
    }
  };
  

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/login', this.state.credentials)
    .then(res => {
      localStorage.setItem('token', res.data.payload);
      this.props.history.push('/colors')
    })
    .catch(err=> console.log('Cannot Login', err))
  }

  logout = e => {e.preventDefault();
    axiosWithAuth()
    .post('/api/login', this.state.credentials)
    .then(res => {
      localStorage.setItem('token', !res.data.payload);
      this.props.history.push('login')
    })
    .catch(err=> console.log('Cannot Logout', err))
  }
  
  render(){
    return (
      <>
        <h1>Welcome to the Bubble App!</h1>
        <div className='form' >
          <form>
            <input type='text' name='username' value={this.state.credentials.username} 
            placeholder="username" onChange={this.handleChange}/>

            <input type='password' name='password' value={this.state.credentials.password} placeholder="password" onChange={this.handleChange}/>

            <button type='submit' onClick={this.login}>Login</button>
            <button onClick={this.logout}>Logout</button>

          </form>
        </div>
      </>
    );
  }
};

export default Login;


// make a post request to retrieve a token from the api
// when you have handled the token, navigate to the BubblePage route