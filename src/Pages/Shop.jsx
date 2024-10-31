import React, { useContext, useEffect, useState } from 'react'
import Card from '../components/Card'
import axios from 'axios';
import Loading from '../components/Loading';
import { AuthContext } from '../context/AuthContext';

export default function Shop() {
  const [products, setProducts] =useState([]);
  const [loading, setLoading] = useState(false);  
  const [searchQuery, setSearchQuery] = useState("");
  console.log(products);


  // Filter based On Search Query






  async function fetchProducts(){
    setLoading(true);
const response= await axios.get("https://api.escuelajs.co/api/v1/products?offset=0&limit=17");
setProducts(response.data);
setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  
 const filteredProducts = products.filter((product) => {

  return product.title.toLowerCase().includes(searchQuery.toLowerCase());
});


  return (
    <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-6xl bg-white rounded-lg shadow-md p-8">
        <h2 className="text-3xl font-bold text-center mb-8">Shop</h2>

        {/* Search Field */}
        <div className="mb-6 flex justify-center">
          <input
          value={searchQuery}
            type="text"
            placeholder="Search for products..."
            className="w-full max-w-md px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            onChange={(e)=>setSearchQuery(e.target.value)}
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center justify-center mb-8 space-x-3">
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300">
            All
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300">
            Electronics
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300">
            Footwear
          </button>
          <button className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-700 hover:bg-gray-300">
            Furniture
          </button>
        </div>
        
        
        {
          loading ? <Loading/>: <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {

              filteredProducts.map((product)=><Card key={product.id} productInfo={product}></Card>)
            }
        </div>
        }
      </div>
    </div>
    </>
  )
}
