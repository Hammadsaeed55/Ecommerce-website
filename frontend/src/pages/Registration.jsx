import React, { useContext, useState } from 'react'
import Logo from "../assets/logo.png"
import google from "../assets/google.png"
import { useNavigate } from 'react-router-dom'
import { IoEyeOutline } from "react-icons/io5";
// import { IoEye } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { authDataContext } from '../context/authContext';
import axios from 'axios'
import {signInWithPopup} from 'firebase/auth'
import { provider } from '../../utils/Firebase.jsx';
import { auth } from '../../utils/Firebase.jsx';
import { userDataContext } from '../context/UserContext.jsx';

const Registration = () => {
  const navigate = useNavigate()
  let [show, setShow] = useState(false);
  let { serverUrl } = useContext(authDataContext)
  let [name, setName] = useState("")
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  const {getCurrentUser} = useContext(userDataContext)

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.post(serverUrl + '/api/auth/register', { name, email, password }, { withCredentials: true })
      getCurrentUser();
      navigate("/")
      console.log(result.data)
    } catch (error) {
      console.log(error)
    }
  }

  // googleSignUp------------------------
 const googleSignup =async()=>{
  try{
    const response = await signInWithPopup(auth, provider)
    let user = response.user
    let name = user.displayName
    let email = user.email
    const result = await axios.post(serverUrl + '/api/auth/googlelogin',{name, email},{withCredentials:true})
    console.log(result.data)
    getCurrentUser()
    navigate('/')
  }catch(error){
      console.log(error)
  }
 }


  return (
    <div className=' w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col  items-center justify-start'>
      <div onClick={() => navigate('/')} className='w-[100%] h-[60px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer'>
        <img className='w-[40px]' src={Logo} alt="" />
        <h1 className='text-[22px] font-sans'>OneCart</h1>
      </div>

      <div className=' w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
        <span className='text-[25px] font-semibold'>Registration</span>
        <span className='text-[16px]'>Welcome to OneCart, Place your order</span>
      </div>
      <div className=' max-w-[600px] w-[90%] h-[500px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
        <form onSubmit={handleSignup} action="" className=' w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
          <div className=' w-[90%] h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[10px] py-[20px] cursor-pointer' onClick={googleSignup} >
            <img src={google} className='w-[20px]' alt="" /> Registration with google
          </div>
          <div className=' w-[100%] h-[20px] flex items-center justify-center gap-[10px]'>
            <div className='w-[40%] h-[1px] bg-[#96969635]'></div> OR <div className='w-[40%] h-[1px] bg-[#96969635]'></div>
          </div>
          <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]'>
            <input
              type="text"
              className="w-full h-[50px] border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold"
              placeholder="UserName"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}

            />
            <input
              type="email"
              className="w-full h-[50px] border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type={show ? "text" : "password"}
              className="w-full h-[50px] border-2 border-[#96969635] backdrop-blur-sm rounded-lg shadow-lg bg-transparent placeholder-[#ffffffc7] px-5 font-semibold"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {
              !show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[35%]' onClick={() => setShow(prev => !prev)} />
            }
            {
              show && < FaEyeSlash className='w-[20px] h-[20px] cursor-pointer absolute right-[35%]' onClick={() => setShow(prev => !prev)} />
            }


            <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold cursor-pointer hover:bg-[#4d4de7]'>Create Account</button>
            <p className='flex gap-[10px]'>You have any account? <span className='text-[#5555f6cf] text-[17px] font-semibold cursor-pointer' onClick={() => navigate('/login')} >Login</span></p>

          </div>
        </form>
      </div>

    </div>
  )
}

export default Registration
