import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { set } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';

export default function Product() {
  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);
const {id}= useParams();

async function fetchSingleProduct() {
  setLoading(true);
  const response= await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
  setSingleProduct(response.data);
  setLoading(false);
}
useEffect(() => {
  fetchSingleProduct();
}, [])


console.log(singleProduct);

 
  return (
    <>
    {
      loading && <Loading/>
    }
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-4xl bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col md:flex-row">
          {/* Product Images */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <div className="grid grid-cols-1 gap-4">
              {singleProduct?.images?.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 md:pl-8">
            <h1 className="text-3xl font-bold mb-4">{singleProduct?.title}</h1>
            <p className="text-xl text-gray-800 font-semibold mb-4">${singleProduct?.price}</p>
            <p className="text-gray-600 mb-6">{singleProduct?.description}</p>
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-500">Category: </span>
              <span className="text-sm text-gray-800">{singleProduct?.category?.name}</span>
            </div>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
