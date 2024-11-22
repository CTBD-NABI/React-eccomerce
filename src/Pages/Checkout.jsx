import React, { useContext } from 'react'
import { CartContext } from '../context/CartContextt';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Checkout() {
  const {cart}= useContext(CartContext);

  const navigate= useNavigate();

 
  function calculateSubtotal() {
    let subtotal = 0;
    cart?.forEach((item) => {
      subtotal =subtotal + item?.price;
    });
    return subtotal.toFixed(2);
  }


  // async function PayNow(){
  //   let userPayAbleAmount= calculateSubtotal();

  
  //     try {
  // const response= await axios.post("https://​sandbox​.aamarpay.com/jsonpost.php",amarPayJSON);
  // const result= response.data;
  // console.log(result);
    
  // } catch (error) {
  //   console.error(error);
  // }

  // }

  async function PayNow() {
    const userPayAbleAmount = calculateSubtotal();
    const amarPayJSON = {
  "store_id": "aamarpaytest",
  "tran_id": "hasdhjasdhkashdsdf",
  "success_url": "http://www.merchantdomain.com/suc esspage.html",
  "fail_url": "http://www.merchantdomain.com/faile dpage.html",
  "cancel_url": "http://www.merchantdomain.com/can cellpage.html",
  "amount": userPayAbleAmount,
  "currency": "BDT",
  "signature_key": "dbb74894e82415a2f7ff0ec3a97e4183",
  "desc": "Merchant Registration Payment",
  "cus_name": "Name",
  "cus_email": "payer@merchantcusomter.com",
  "cus_add1": "House B-158 Road 22",
  "cus_add2": "Mohakhali DOHS",
  "cus_city": "Dhaka",
  "cus_state": "Dhaka",
  "cus_postcode": "1206",
  "cus_country": "Bangladesh",
  "cus_phone": "+8801704",
  "type": "json"
}

    const response = await axios.post("http://localhost:3000/paynow", amarPayJSON);
    console.log(response.data);
   if (response?.data) {
    window.location.href = response?.data;
  } else {
    console.error('Payment URL is not present in the response');
  }
}


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
        <div className='mt-8 text-right'>
          <h3 className='text-2xl font-bold'>Subtotal: {calculateSubtotal()} BDT</h3>
          <button onClick={PayNow} className='btn btn-success my-3'>Pay Now</button>
        </div>
      </div>
    </div>
    </>
  )
}
