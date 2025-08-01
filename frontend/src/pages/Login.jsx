import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const [state, setstate] = useState('Sign Up')

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [name, setname] = useState('')

  const navigate = useNavigate()

  const {backendurl,token,setToken} = useContext(AppContext)

  const onsubmithandler = async (event) => {
    event.preventDefault()

    try {
      if (state == 'Sign Up') {

        const {data} = await axios.post(backendurl + '/api/user/register', {name,password,email})

        if(data.success){

          localStorage.setItem('token',data.token)
          setToken(data.token)
          
        }else{
          toast.error(data.message)
        }
        
      }else{
        const {data} = await axios.post(backendurl + '/api/user/login', {password,email})

        if(data.success){

          localStorage.setItem('token',data.token)
          setToken(data.token)
          
        }else{
          toast.error(data.message)
        }

      }
    } catch (error) {

      toast.error(error.message)
      
    }

  }

 useEffect(()=>{

  if (token) {
    navigate('/')    
  }

 },[token])


  return (
    <form onSubmit={onsubmithandler} className='min-h-[80px] flex items-center mt-24'>

      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[400px] sm:min-w-94 border rounded-xl text-zinc-600 text-sm shadow-lg  py-12 px-10'>
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? 'Create Account' : 'Login'} </p>
        <p className='w-full'>Please {state === 'Sign Up' ? 'Create Account' : 'Login'} to book appointment</p>

        {
          state === 'Sign Up' &&  <div className='w-full'>
          <p>Full Name</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e) => setname(e.target.value)} value={name} required/>
        </div>
        }

       
        <div className='w-full'>
          <p>Email</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e) => setemail(e.target.value)} value={email} required/>
        </div>

        <div className='w-full'>
          <p>Password</p>
          <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e) => setpassword(e.target.value)} value={password} required/>
        </div>

        <button type='submit' className='bg-primary text-white py-2 w-full rounded-md text-base' >{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>
        {
          state === 'Sign Up' 
          ? <p>Already have an account? <span  onClick={()=>setstate('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
          : <p>Create an new account? <span onClick={()=>setstate('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login