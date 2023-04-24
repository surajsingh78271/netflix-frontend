import React, { useEffect, useState } from 'react'
import {useDispatch} from "react-redux";
import { logout } from '../../features/userSlice';
import "./Css/Navbar.css";
function Navbar() {
    const [show,setShow] = useState(false);
    const dispatch = useDispatch();
    const transitionNavnar = ()=>{
        if(window.scrollY>100)
        {
            setShow(true)
        }
        else{
            setShow(false)
        }
    }
    useEffect(()=>{
        window.addEventListener("scroll",transitionNavnar)
        return ()=>{
            window.removeEventListener("scroll",transitionNavnar)
        }
    },[])

    const logouthandler = () =>{
        
        dispatch(logout());
    }
  return (
    <div className={`nav ${show && "nav_black"}`}>
          <div className='nav-content'>
               <h2 className="nav-content-logo">NETFLIX</h2>
                <button className='nav-content-logo1' onClick={logouthandler}>logout</button>
          </div>

    </div>
  )
}

export default Navbar