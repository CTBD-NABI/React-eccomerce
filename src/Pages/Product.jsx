import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { set } from 'react-hook-form';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { AuthContext } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { CartContext } from '../context/CartContextt';

export default function Product() {

  const {addToCart}= useContext(CartContext);
  
  const checkUser=localStorage.getItem("userFromGoogle");
  // console.log(checkUser);
  const navigate= useNavigate();
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


function handelCart(product){

  if(checkUser){
addToCart(product);
toast.success("Product Added To Cart");
  }
  else{
    navigate("/login");
    toast.error("You have to Login First")
  }
  
}




 
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
            <button onClick={()=>handelCart(singleProduct)}  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
