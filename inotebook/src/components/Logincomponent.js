import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const[ credentials,setCredentials]=useState({email:"",password:""});
   let navigate=useNavigate();
  const handleSubmit=async (e)=>{
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/auth/login', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjU4MDY3MjM5OGNjNWM1Njg4MmM0NmFkIn0sImlhdCI6MTcwMjk4MjQyNn0.7rVFtUBnTs0rV3qf7r7XWz1xX65pWzzLABBhDyi7hlY',
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password}),
    });

    const json= await response.json();
    console.log(json);
    if(json.success){
      //save token and redirect
      localStorage.setItem('token',json.authtoken);
      navigate("/");

    }
    else
    {
      alert("login with correct credentials");
    }
  }

  const onchange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value});

  }



  return (
    <div>
      This is Login
      <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onchange} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" value={credentials.password} onChange={onchange}/>
  </div>
  {/* <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}

export default Login
