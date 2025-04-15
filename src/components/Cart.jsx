import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove, increase, decrease } from './store/cartSlice'
import { RiDeleteBinLine } from 'react-icons/ri'

export default function Cart() {
  const products = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const [isEditing, setIsEditing] = useState(null)

  const handleRemove = (id) => {
    dispatch(remove(id))
  }

  const handleIncrease = (id) => {
    dispatch(increase(id))
  }

  const handleDecrease = (id) => {
    dispatch(decrease(id))
  }

  const toggleEditing = (id) => {
    setIsEditing(isEditing === id ? null : id)
  }
  const totalPrice = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  

  return (
    <div>
      <div className="max-w-[90%] mx-auto mt-10">
        <h1 className="text-center text-5xl font-bold text-blue-500 pb-5">My Cart</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-4 rounded shadow flex flex-col justify-center items-center"
            >
              <div className="w-full h-40 flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-medium mt-2 line-clamp-2">{product.title}</h3>
              <p className="text-gray-700 mt-1">
                <span className="font-bold text-blue-600">${(product.price * product.quantity).toFixed(2)}</span>
              </p>

              <div className="flex items-center mt-3">
                {isEditing !== product.id && (
                  <div
                    className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer"
                    onClick={() => toggleEditing(product.id)}
                  >
                    {product.quantity}
                  </div>
                )}
                {isEditing === product.id && (
                  <div className="flex items-center ml-4 space-x-2 bg-black rounded-lg">
                    <button
                      className="text-white px-3 py-1 rounded-lg"
                      onClick={() => handleDecrease(product.id)}
                    >
                      -
                    </button>
                    <div className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full">
                      {product.quantity}
                    </div>
                    <button
                      className="text-white px-3 py-1 rounded-lg"
                      onClick={() => handleIncrease(product.id)}
                    >
                      +
                    </button>
                    <button
                      className="text-white px-3 py-1 rounded-lg"
                      onClick={() => handleRemove(product.id)}
                    >
                      <RiDeleteBinLine />
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

     
        <div className="flex justify-center mt-10">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-all duration-200">
            Go to Checklist <span>Total price : {totalPrice.toFixed(2)}</span>
          </button>
        </div>
      </div>
    </div>
  )
}
