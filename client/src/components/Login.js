import React, { useState } from "react";
import axios from 'axios'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [userInput, setUserInput] = useState({})

  const handleChange = (event) => {
    event.preventDefault()
    setUserInput({
      ...userInput,
      [event.target.name]:  event.target.value
    })
    console.log('user input:', userInput);
  }


  const login = (event) => {
    event.preventDefault()
    axios.post("http://localhost:5000/api/login", userInput)
		.then((response) => { 
			console.log(response)
			localStorage.setItem("token", response.data.payload)
			window.location.assign('/protected');
		})
		.catch((error) => {
			console.log(error)
		})
  }


  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <label htmlFor='username'>Username:</label>
      <input
        className='login-form-container__input'
        // value={}
        onChange={handleChange}
        name='username'
        placeholder="example@123.com"
      ></input>
      <label htmlFor='password'>Password:</label>
      <input
        className='login-form-container__input'
        // value={}
        onChange={handleChange}
        name='password'
        placeholder="**********"
      ></input>
      <button 
      className='login-form-container__button' 
      onClick={login}
      >Login</button>
    </>
  );
};

export default Login;