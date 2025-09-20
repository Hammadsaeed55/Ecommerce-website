import React, { useContext, useState } from 'react'
import Logo from '../assets/logo.png'
import { IoEyeOutline } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import axios from 'axios'
import {authDataContext} from '../context/AuthContext';

const Login = () => {
  let [show, setShow] = useState(false);
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")
  let {serverUrl} = useContext(authDataContext)

const AdminLogin=async(e)=>{
  e.preventDefault();
  try{
        const result = await axios.post(serverUrl + "/api/auth/adminlogin",{email,password},{withCredentials:true})
        console.log(result.data)
  }
  catch(error){
  console.log(error)
  }
}

  return (
    <div className=' w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-[white] flex flex-col  items-center justify-start'>
          <div className='w-[100%] h-[80px] flex items-center justify-start px-[30px] gap-[10px] cursor-pointer'>
            <img className='w-[40px]' src={Logo} alt="" />
            <h1 className='text-[22px] font-sans'>OneCart</h1>
          </div>
    
          <div className=' w-[100%] h-[100px] flex items-center justify-center flex-col gap-[10px]'>
            <span className='text-[25px] font-semibold'>Login</span>
            <span className='text-[16px]'>Welcome to OneCart, Appy to Admin Login</span>
          </div>
          <div className=' max-w-[600px] w-[90%] h-[400px] bg-[#00000025] border-[1px] border-[#96969635] backdrop:blur-2xl rounded-lg shadow-lg flex items-center justify-center'>
            <form onSubmit={AdminLogin}  action="" className=' w-[90%] h-[90%] flex flex-col items-center justify-start gap-[20px]'>
              
              <div className='w-[90%] h-[400px] flex flex-col items-center justify-center gap-[15px]'>
    
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
                  !show && <IoEyeOutline className='w-[20px] h-[20px] cursor-pointer absolute right-[34%] top-[59.3%] bottom-[32%]' onClick={() => setShow(prev => !prev)} />
                }
                {
                  show && < FaEyeSlash className='bottom-[32%] w-[20px] h-[20px] cursor-pointer absolute right-[34%] top-[59.3%]' onClick={() => setShow(prev => !prev)} />
                }
    
                <button className='w-[100%] h-[50px] bg-[#6060f5] rounded-lg flex items-center justify-center mt-[20px] text-[17px] font-semibold'>Login</button>
                
              </div>
            </form>
          </div>
    
        </div>
  )
}

export default Login
