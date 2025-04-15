import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaShoppingCart } from 'react-icons/fa';
import { useDisclosure } from '@chakra-ui/react';
import CartModal from './CartModal';

export default function Navbar() {
  const totalQuantity = useSelector((state) =>
    state.cart.reduce((total, product) => total + product.quantity, 0)
  );

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <nav className="bg-gray-800 fixed  top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
            <h1 className="ml-4 text-white font-semibold">Redux Toolkits</h1>
          </div>
          <div className="hidden sm:flex space-x-4">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 text-sm font-medium rounded-md"
            >
              Product
            </Link>
          </div>
        </div>


        <div className="flex items-center text-white space-x-4 cursor-pointer" onClick={onOpen}>
          <FaShoppingCart size={20} />
          <span className="relative -left-3 -top-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {totalQuantity}
          </span>
        </div>
      </div>

      <CartModal isOpen={isOpen} onClose={onClose} />
    </nav>
  );
}
