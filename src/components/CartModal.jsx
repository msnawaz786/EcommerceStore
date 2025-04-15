import React, { useEffect, useState } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, remove, selectTotalPrice } from './store/cartSlice';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

export default function CartModal({ isOpen, onClose } ) {
const navigate=useNavigate();
    const products = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const [isEditing, setIsEditing] = useState(null)


        const scrollBar=()=>{
            if (isOpen) {
                document.body.style.overflow = 'hidden';
              } else {
                document.body.style.overflow = 'auto';
              }
        }
scrollBar()
  
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

    const totalPrice=useSelector(selectTotalPrice);
    // const totalPrice = products.reduce(
    //   (acc, product) => acc + product.price * product.quantity,
    //   0
    // );



  return (
    <Drawer isOpen={isOpen} placement='right' onClose={onClose} size="md">
      <DrawerOverlay />
      <DrawerContent
        sx={{
            borderTopLeftRadius: '1rem',
            borderBottomLeftRadius: '0rem',
            overflow: 'hidden',
            backgroundColor: 'white',
            
          }}
      >



        <DrawerCloseButton />
        <DrawerHeader>
            <h1 className='font-extrabold  text-3xl'>Your Order</h1>
        </DrawerHeader>

        <DrawerBody className="overflow-y-auto custom-scrollbar">

      <div className='flex flex-col'>
  {products.map((product) => (
         <div
         key={product.id}
         className="bg-white p-4 flex items-center justify-between space-x-4"
       >

         <div className="w-20 h-20 flex items-center justify-center">
           <img
             src={product.image}
             alt={product.title}
             className="max-h-full max-w-full object-contain"
           />
         </div>
       
     
         <div className="flex-1 ">
           <h3 className="text-sm font-medium leading-snug line-clamp-2 break-words max-w-[150px]">{product.title}</h3>
           <span className="text-gray-700 text-sm">
             <span className="font-bold text-red-600">
               ${(product.price * product.quantity).toFixed(2)}
             </span>
           </span>
         </div>
       
    
         <div className="flex items-center space-x-2">
           {isEditing !== product.id ? (
             <div
               className="bg-black text-white w-8 h-8 flex items-center justify-center rounded-full cursor-pointer "
               onClick={() => toggleEditing(product.id)}
             >
               {product.quantity}
             </div>
           ) : (
             <div className="flex items-center bg-black text-white w-32 py-2 rounded-full  justify-around font-bold">
               <button onClick={() => handleDecrease(product.id)}>-</button>
               <div>{product.quantity}</div>
               <button onClick={() => handleIncrease(product.id)}>+</button>
               <button onClick={() => handleRemove(product.id)}>
                 <RiDeleteBinLine />
               </button>
             </div>
           )}
         </div>
       </div>
       
          ))}
        </div>

    
        </DrawerBody>

        {/* <DrawerFooter > */}
         
        <div className="flex justify-center mt-10 bg-black mb-2 mx-3 rounded-full font-bold text-lg">
          <button className="  text-white px-6 py-4   transition-all duration-200 flex justify-between w-full" onClick={()=>{
                onClose(); 
                navigate("/checkout", { state: { totalPrice } });}}>
            <div className='flex justify-center items-center gap-x-2'>
            <span className='size-5 flex items-center justify-center rounded-full bg-white text-black'>{products.length}</span>
            <h2>Go to Checkout</h2> 
            </div>
         
            <span>$ {totalPrice.toFixed(2)}</span>
          </button>
        </div>
        {/* </DrawerFooter> */}
      </DrawerContent>
    </Drawer>
  );
}
