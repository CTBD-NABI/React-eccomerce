import React, { useContext, useState } from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/AuthContext';
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import { auth } from '../Firebase/firebase';

const provider = new GoogleAuthProvider();


export default function Login() {

  const {setLoggedUser,setGoogleUser}= useContext(AuthContext);

  function loginWithGoogle(){
    signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    setGoogleUser(user);
    localStorage.setItem("userFromGoogle",JSON.stringify(user));
    // console.log(user);

  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);

  });

  }
  const {setUserToken}=useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const navigation= useNavigate();
   const {
    register,
    handleSubmit,
reset
  } = useForm()

 async function onSubmit(data){
 setLoading(true);
  try {
  const response= await axios.post("https://api.escuelajs.co/api/v1/auth/login",data);
    const userInfo = response.data;
    // setLoginInfo(userInfo); 
     setUserToken(userInfo);
    setLoading(false);
    reset();
    navigation("/shop");
   toast.success("Login Successfull");
  } catch (error) {
    console.error(error);
  }
  }




  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)} >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your email"
              {...register("email")}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Enter your password"
              {...register("password")}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            {
              loading? <span className="loading loading-spinner loading-md"></span> :"Login"
            }
          </button>
        </form>
         <button onClick={loginWithGoogle} className="w-full mt-4 flex gap-3 items-center justify-center  text-slate-900 hover:bg-slate-200 py-2 rounded-md shadow-lg  transition duration-200 mb-6">
        <FcGoogle />
          <span>Sign in with Google</span>
        </button>
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don’t have an account?{" "}
            <NavLink to="/register" className="text-blue-600 hover:underline">
              Sign Up
            </NavLink>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
