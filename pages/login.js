import React, { useState } from 'react'
import {auth} from './firebase'
import {signInWithPopup,GoogleAuthProvider,signInWithEmailAndPassword ,getAuth} from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'
import { useEffect } from 'react'
import { useRouter } from 'next/dist/client/router'
import GoogleButton from 'react-google-button'

const Login = () => {
  const router=useRouter()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [user,setUser]=useAuthState(auth)
  const googleAuth=new GoogleAuthProvider();
  const login=async()=>{
      const result= await signInWithPopup(auth,googleAuth).then(()=>{
        router.push('/')
      });
 
  }
  useEffect(()=>{
    console.log(user)
  },[user])
  const loginWithEmailAndPassword=()=>{
    const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
  .then(() => {
    // Signed in 
    // const user=userCredential.user;
    router.push('/')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

  }
  return (
    <div>
  

<section className="bg-white">
  <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
    <aside
      className="relative block h-16 lg:order-last lg:col-span-5 lg:h-full xl:col-span-6"
    >
      <img
        alt="Pattern"
        src="https://c0.wallpaperflare.com/preview/210/111/825/blur-chart-data-finance.jpg"
        className="absolute inset-0 h-full w-full rounded-lg object-cover"
      />
    </aside>

    <main
      aria-label="Main"
      className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
    >
      <div className="max-w-xl lg:max-w-3xl">
        <a className="block text-blue-600" href="/">
         
        {/* SG Datalytics Logo goes here */}
        </a>

        <h1
          className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
        >
          Welcome to SG-Datalytics
        </h1>

        <p className="mt-4 leading-relaxed text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nam
          dolorum aliquam, quibusdam aperiam voluptatum.
        </p>

        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
          <div className="col-span-6 sm:col-span-3">
            <label
              for="FirstName"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
              type="text"
              onChange={(e)=>setEmail(e.target.value)}
              value={email}
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
              type="password"
             onChange={(e)=>setPassword(e.target.value)}
             value={password}
              className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
            />
          </div>

         
          <div className="col-span-6">
            <label for="MarketingAccept" className="flex gap-4">
              <input
                type="checkbox"
                id="MarketingAccept"
                name="marketing_accept"
                className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
              />

              <span className="text-sm text-gray-700">
                I want to receive emails about events, product updates and
                company announcements.
              </span>
            </label>
          </div>

        

          <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
            <button
              onClick={loginWithEmailAndPassword}
              className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
              Login
            </button>

            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
              Don't have an account? 
              <a href="/register" className="text-gray-700 underline px-2">Sign Up</a>.
            </p>
          </div>
          
          <GoogleButton type='dark' onClick={login}/>
        </form>
      </div>
    </main>
  </div>
</section>

    </div>
  )
}

export default Login