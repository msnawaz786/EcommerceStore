import React from 'react';
import CheckoutMap from './Checkoutmap';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { selectTotalPrice } from './store/cartSlice';
import PaymentMethodModal from './PaymentMethodModal';
import { useDisclosure } from '@chakra-ui/react';

export default function CheckoutDetail() {
  const navigate = useNavigate();
  const products = useSelector(state => state.cart);
  const subtotal = useSelector(selectTotalPrice);
  const { isOpen, onOpen, onClose } = useDisclosure();


  const serviceFee = 10;
  const distance = 23.08; 
  const deliveryFee = parseFloat((distance * 6.23).toFixed(2)); 
  const totalPrice = subtotal + serviceFee + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
   
      <div className="">
        <CheckoutMap />
        <div className="relative bottom-36 left-[600px] transform -translate-x-1/2 text-center">
          <h1 className="font-extrabold text-5xl">Checkout</h1>
          <h2 className="text-2xl font-bold">Burger King</h2>
        </div>
      </div>

  
      <div className="flex flex-col lg:flex-row justify-center gap-32 px-6">
   
        <div className="w-full max-w-2xl">
          <h1 className="text-2xl font-sans font-bold mb-4">Selected Items</h1>
          <div className="space-y-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white p-4 flex items-center justify-between rounded-lg shadow-sm"
              >
                <div className="w-20 h-20 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                <div className="flex-1 px-4">
                  <h3 className="text-sm font-medium">{product.title}</h3>
                  <span className="text-gray-700 text-sm">
                    <span className="font-bold text-red-600">
                      ${(product.price * product.quantity).toFixed(2)}
                    </span>
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-5 pb-5">
            <button
              className="text-lg font-bold text-blue-600 hover:underline"
              onClick={() => navigate('/')}
            >
              + Add more items.
            </button>
          </div>
        </div>
 
   
        <div className="w-full max-w-sm bg-white shadow-xl rounded-2xl p-6 text-sm font-medium self-start">
          <h2 className="text-lg font-bold mb-1">Prices in $</h2>
          <p className="text-xs text-gray-500 mb-2">incl. taxes (if applicable)</p>
          <p className="text-sm text-red-500 cursor-pointer mb-4">How fees work</p>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>{subtotal.toFixed(2)} $</span>
            </div>
            <div className="flex justify-between">
              <span>Service Fee</span>
              <span>{serviceFee.toFixed(2)} $</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery Fee ({distance.toFixed(2)} km)</span>
              <span>{deliveryFee.toFixed(2)} $</span>
            </div>
            <div className="border-t border-gray-200 pt-2 flex justify-between font-bold text-base">
              <span>Total</span>
              <span>{totalPrice.toFixed(2)} $</span>
            </div>
          </div>

          <button
  className="w-full mt-5 bg-black text-white py-3 rounded-full text-center font-semibold hover:opacity-90 transition-all"
  onClick={onOpen}
>
  Select Payment Method
</button>

        </div>
      </div>

      <PaymentMethodModal isOpen={isOpen} onClose={onClose} />

    </div>
  );
}
