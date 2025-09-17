import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png'
import { IoSearchCircleOutline } from 'react-icons/io5'
import {FaCircleUser}  from "react-icons/fa6"
import {MdOutlineShoppingCart} from "react-icons/md"
import { userDataContext } from '../context/UserContext'
import { IoSearchCircleSharp } from "react-icons/io5";

const Nav = () => {
    let {userData} = useContext(userDataContext)
    let [showSearch, setShowSearch] = useState(true)
    let [showProfile, setShowProfile] = useState(false)

  return (
    <div className='w-[100vw] h-[70px] bg-[#ecfafaec] z-10 fixed top-0 flex items-center justify-between px-[30px] shadow-md shadow-black'>
        <div className='w-[30%] flex items-center justify-start gap-[10px]'>
            <img src={logo} alt="" className='w-[50px]' />
            <h1 className='text-[25px] text-[black] font-sans'>OneCart</h1>
        </div>
        <div className='w-[40%]'>
            <ul className='flex items-center justify-center gap-[19px] text-[white]'>
                <li className='txet-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>HOME</li>
                <li className='txet-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>COLLECTIONS</li>
                <li className='txet-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>ABOUT</li>
                <li className='txet-[15px] hover:bg-slate-500 cursor-pointer bg-[#000000c9] py-[10px] px-[20px] rounded-2xl'>CONTACT</li>
            </ul>
        </div>
        <div className='w-[30%] flex items-center justify-end gap-[20px]'>
            {!showSearch && <IoSearchCircleOutline className='w-[38px] h-[38px] text-[#000000] cursor-pointer' onClick={()=>setShowSearch(pre => !pre)}/>}
            { showSearch && <IoSearchCircleSharp className='w-[38px] h-[38px] text-[#000000] cursor-pointer' onClick={()=>setShowSearch(pre => !pre)}/>}
            {
                !userData && <FaCircleUser className='w-[29px] h-[29px] text-[#000000] cursor-pointer'/>
            }
            {
                userData && <div className='w-[30px] h-[30px] bg-[#080808] text-[white] rounded-full flex items-center justify-center cursor-pointer' onClick={()=>setShowProfile(pre => !pre)} >{userData?.name.slice(0,1).toUpperCase()}</div>
            }
            <MdOutlineShoppingCart className='w-[30px] h-[30px] text-[#000000] cursor-pointer'/>
            <p className='absolute w-[18px] h-[18px] items-center md:flex justify-center bg-black px-[5px] py-[2px] text-white rounded-full text-[9px] top-[10px] right-[23px]'>10</p>
        </div>
       {
        showSearch &&  <div className='w-[100%] h-[80px] bg-[#d8f6f9dd] absolute top-[100%] left-0 right-0 flex items-center justify-center'>
           <input type="text" className='w-[50%] h-[60%] bg-[#233533] rounded-[30px] px-[50px] placeholder:text-white text-[white] text-[18px]' placeholder='Search Here' />
        </div>
       }
       {
        showProfile && <div className='absolute w-[220px] h-[150px] bg-[#000000d7] top-[110%] right-[4%] border-[1px] border-[#aaa9a9] rounded-[10px] z-[10]'>
           <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
           </ul>
       </div>
       }
    </div>
  )
}

export default Nav
