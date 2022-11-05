
import {auth} from './firebase'
import {signInWithPopup,GoogleAuthProvider} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useState,useEffect } from 'react'
import { getAuth,createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/router'
import GoogleButton from 'react-google-button'

const Register = () => {
    const auth=getAuth()
    const [user,setUser]=useAuthState(auth)
    const googleAuth=new GoogleAuthProvider();
    const login=async()=>{
        const result= await signInWithPopup(auth,googleAuth);
   
    }
    useEffect(()=>{
      console.log(user)
    },[user])
const router=useRouter()
const [name,setName]= useState('')
const [email,setEmail]= useState('')
const [password,setPassword]=useState('')
const [confirmPassword,setConfirmPassword]=useState('')

const signUp=(e)=>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth,email,password).then(()=>{
        router.push('/')
    })
    setName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
   
}

  return (
    <div>
      <div>
       
       </div>
<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside
      className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6">
      <img
        alt="Pattern"
        src="https://c1.wallpaperflare.com/preview/876/278/479/blur-business-chart-computer.jpg"
        className="absolute inset-0 h-full w-full opacity-80 rounded-lg object-cover"
      />
    </aside>

    <main
      aria-label="Main"
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        {/* sg datalytics logo */}

        <h1
          className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
        >
          Welcome to SG Datalytics
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
          dolorum aliquam, quibusdam aperiam voluptatum.
        </p>

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-6">
            <label
              for="FirstName"
              className="block text-sm font-medium text-gray-700">
              Name
            </label>

            <input
              onChange={(e)=>setName(e.target.value)}
              value={name}
              type="text"
             
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          

          <div className="col-span-6">
            <label for="Email" className="block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
              type="email"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              for="Password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
              onChange={(e)=>setPassword(e.target.value)}
              value={password}
              type="password"
              id="Password"
              name="password"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

          <div className="col-span-6 sm:col-span-3">
            <label
              for="PasswordConfirmation"
              className="block text-sm font-medium text-gray-700"
            >
              Password Confirmation
            </label>

            <input
              onChange={(e)=>setConfirmPassword(e.target.value)}
              value={confirmPassword}
              type="password"
              id="ConfirmPassword"
              name="password_confirmation"
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

         

          <div className="col-span-6">
            <p className="text-sm text-gray-500">
              By creating an account, you agree to our
              <a href="#" className="text-gray-700 underline">
                terms and conditions
              </a>
              and
              <a href="#" className="text-gray-700 underline">privacy policy</a>.
            </p>
          </div>

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
          <a href="/home">
          <button
              onClick={signUp}
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 my-5 h-14 w-32 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
              Create an account
            </button>
          </a>
          <GoogleButton type='dark' onClick={login}/>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Already have an account?
              <a href="/login" className="text-gray-700 underline">Log in</a>.
            </p>
          </div>
        </form>
      </div>
    </main>
  </div>
</section>

    </div>
  )
}

export default Register
