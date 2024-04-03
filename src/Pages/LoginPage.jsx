import React from 'react'

const LoginPage = () => {
  return (
    <div className='login page'>
          <form>
            <h1>Login</h1>
        <input type="text"  placeholder='email'/>
        <input type="text"  placeholder='password'/>
        <button>submit</button>
      </form>
     
    </div>
  )
}

export default LoginPage