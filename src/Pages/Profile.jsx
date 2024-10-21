import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

export default function Profile() {

  const {loggedUser}=useContext(AuthContext);
  
  console.log(loggedUser)

  return (
    <>
  
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col items-center">
          <img
            src={loggedUser?.avatar}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mb-4"
          />
          {/* <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">Role: {user.role}</p> */}
        </div>
      </div>
    </div>
    </>
  )
}
