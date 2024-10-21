import React from 'react'

export default function Checkout() {
  const items = [
    {
      title: "Wireless Headphones",
      image: "https://via.placeholder.com/100", // Replace with an actual image URL
      price: "$99",
      category: "Electronics",
    },
    {
      title: "Running Shoes",
      image: "https://via.placeholder.com/100", // Replace with an actual image URL
      price: "$79",
      category: "Footwear",
    },
    {
      title: "Smart Watch",
      image: "https://via.placeholder.com/100", // Replace with an actual image URL
      price: "$199",
      category: "Wearables",
    },
  ];
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
            {items.map((item, index) => (
              <tr key={index} className="text-center">
                <td className="p-4 border-b border-gray-200">{item.title}</td>
                <td className="p-4 border-b border-gray-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 mx-auto"
                  />
                </td>
                <td className="p-4 border-b border-gray-200">{item.price}</td>
                <td className="p-4 border-b border-gray-200">{item.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  )
}
