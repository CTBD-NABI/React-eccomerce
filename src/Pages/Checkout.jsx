import React, { useContext } from 'react'
import { CartContext } from '../context/CartContextt';

export default function Checkout() {
  const {cart}= useContext(CartContext);

  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Checkout</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-4 bg-blue-200 text-gray-800">Title</th>
              <th className="p-4 bg-green-200 text-gray-800">Image</th>
              <th className="p-4 bg-yellow-200 text-gray-800">Price</th>
              <th className="p-4 bg-pink-200 text-gray-800">Category</th>
            </tr>
          </thead>
          <tbody>
            {cart?.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-4 border-b border-gray-200">{item?.title}</td>
                <td className="p-4 border-b border-gray-200">
                  <img
                    src={item?.images[0]}
                    alt={item?.title}
                    className="w-16 h-16 mx-auto"
                  />
                </td>
                <td className="p-4 border-b border-gray-200">{item?.price}</td>
                <td className="p-4 border-b border-gray-200">{item?.category?.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}
