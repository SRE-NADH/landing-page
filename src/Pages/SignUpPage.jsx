import React from 'react'

const SignUpPage = () => {
  return (
    <div className='signin page'>
        
       <form>
       <h1>Create Account</h1>
        <input type="text"  placeholder='name'/>
        <input type="text"  placeholder='email'/>
        <input type="text" placeholder='password'/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default SignUpPage