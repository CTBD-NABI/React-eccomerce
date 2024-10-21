import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
     <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
        <NavLink to="/" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Go Home
        </NavLink>
      </div>
    </div>
    </>
  )
}
