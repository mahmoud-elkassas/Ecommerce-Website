import React, { useContext, useState } from "react"
import './Navbar.css'
import logo from '../Assets/logo.png'

import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom"
import { ShopContext } from "../../Context/ShopContext"
import Home from "../../Pages/Home"



const Navbar = () => {
    const [menu, setMenu]= useState('Home');
    const{getTotalCartItems}=useContext(ShopContext)


   
  return (
    <>
    <div className='navbar'>
        <div className='nav-logo'>
         <Link style={{textDecoration:'none' }}  to="/">  <img onClick={()=>{setMenu('Home')}} className='logo' src={logo}  alt='logo' /> 
      
          
            <p>SHOPPER</p>
            </Link>  
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{
                setMenu('Home')
                
            }}>
                <Link style={{textDecoration:'none'}} to='/'>Home</Link>
                {menu==="Home"?<hr/>:<></>
               }</li>
            <li onClick={()=>{
                setMenu('mens')
                
            }}>
                <Link  style={{textDecoration:'none'}}  to='/mens'>Men</Link>
              {menu==="mens"?<hr/>:<></>
               }
            </li>
            <li onClick={()=>{
                setMenu('women')
                
            }}>
                <Link style={{textDecoration:'none'}}  to='/womens'>Women</Link>
                {menu==="women"?<hr/>:<></>
              }
            </li>
            <li onClick={()=>{
                setMenu('kids')
                
            }}>
                <Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link>
            {menu==="kids"?<hr/>:<></>
               }
            </li>
        </ul>
        <div className='nav-login-cart'>
        <Link to='/login'> <button>Login </button></Link>
           
                 <Link to='/cart'><img className='cart-icon' src={cart_icon} alt='cart-icon' /></Link>  
                    <p className='cart-count'>{getTotalCartItems()}</p>
                    
            </div>
        
    </div>
</> )
}

export default Navbar