import React from 'react'

const LoginForm = () => {
  return (
    <>
        <label for="">Enter Username:</label>
        <input type="text" id='username' name='username'/>
        <br />
        <label for="">Enter Password:</label>
        <input type="password" id='password' name='password'/>
        <br />
        <button>Submit</button>
        <br />
        <br />
    </>
    
  )
}

export default LoginForm