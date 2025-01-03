import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import { CartContext } from '../context/CartContextt';

export default function Navbar() {
  const {userToken,loggedUser}= useContext(AuthContext);
  const {cart}= useContext(CartContext);
  console.log(cart);
  const userInfo=JSON.parse(localStorage.getItem("loggedUser"));
  const googleUserInfo=JSON.parse(localStorage.getItem("userFromGoogle"));
  console.log(googleUserInfo);
  const navigate=useNavigate();

  function logout(){
    localStorage.removeItem("userToken");
    localStorage.removeItem("loggedUser");
    localStorage.clear();
    navigate("/login");
    
  }
 

  return (
    <>
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to={"/shop"}>Shop</NavLink></li>
        <li><NavLink to={"/checkout"}>Checkout</NavLink></li>
        <li><NavLink to={"/login"}>Login</NavLink></li>
        <li><NavLink to={"/register"}>Register</NavLink></li>
      </ul>
    </div>
  </div>
  <div className="navbar-center">
    <a className="btn btn-ghost text-xl">Shopify</a>
  </div>
  <div className="navbar-end">
  <NavLink to={"/checkout"}>
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="badge badge-sm indicator-item">{cart.length}</span>
        </div>
      </div>
  </NavLink>

    {
      userInfo || googleUserInfo && <div className="dropdown dropdown-end z-50">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src={googleUserInfo?googleUserInfo?.photoURL:"https://images.pexels.com/photos/1270076/pexels-photo-1270076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <NavLink to={"/profile"} className="justify-between">
           { (userInfo || googleUserInfo) ? (userInfo?.name || googleUserInfo?.displayName || "Profile") : "Profile" }

            <span className="badge">New</span>
          </NavLink>
        </li>
        <li onClick={logout} className='cursor-pointer'>logout</li>
      </ul>
    </div>
    }
  </div>
</div>
    </>
  )
}
