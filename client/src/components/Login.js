import React, {useState} from "react";
import {Redirect} from "react-router-dom";
import axios from "axios";

const Login = props => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  const onChange = e =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const onSubmit = e =>{
    e.preventDefault();
    axios.post("http://localhost:5000/api/login", formData).then(({data})=>{
      localStorage.setItem("token", data.payload);
      props.setToken(data.payload)
    }).catch(err=>{
      console.log(err);
    })
  }

  return (
    <>
      {props.token && 
        <Redirect to="/bubble-page"/>
      }
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={onSubmit}>
        <h2>Login</h2>
        <label htmlFor="username">
          Username: <input onChange={onChange} type="text" name="username"/>
        </label>
        <label htmlFor="password">
          Password: <input onChange={onChange} type="password" name="password"/>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default Login;