import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card({productInfo}) {

  const {id, title, description, price, category, images} = productInfo;

  

  return (
    <>
         <NavLink to={`/shop/product/${id}`}>

             <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition duration-200 object-cover">
            <img
              src={images[0]}
              alt="Product 1"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-2">{description.slice(0,100)}.</p>
            <p className="text-blue-600 font-bold mb-4">${price}</p>
            <span className="text-xs px-3 py-1 rounded-full bg-green-200 text-green-800">
              {
category.name
}
            </span>
          </div>
         </NavLink>
    </>
  )
}
