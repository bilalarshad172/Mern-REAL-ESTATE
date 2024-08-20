import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
      <div className='max-w-lg mx-auto'>
          <h1 className='text-3xl font-semibold text-center my-5'>SignUp</h1>
          <div className='border p-4 rounded-lg'>
              <form className='flex flex-col gap-4'>
              <input type="text" placeholder='username' className='p-2 border rounded-md' id='username'/>
              <input type="email" placeholder='email' className='p-2 border rounded-md' id="email" />
                  <input type="password" placeholder='password' className='p-2 border rounded-md' id="password" />
                  <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' >Sign up</button>
              </form>
              <div className='flex gap-2 mt-3'>
                  <p>Already have an account?</p>
                  <Link to={'/sign-in'}>
                  <span className='text-blue-700'>Sign in</span>
                  </Link>
              </div>
          </div>


      </div>
  )
}

export default SignUp