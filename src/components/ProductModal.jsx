import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { add } from "./store/cartSlice";

export default function ProductModal({ isOpen, onClose, product }) {
    const dispatch=useDispatch()
      const addToCart = (product) => {
        dispatch(add(product));
        onClose()
      };
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent   borderRadius="2xl">
        <ModalCloseButton 
           style={{
            fontSize: "12px",
            color: "black",
            padding: "8px",
            backgroundColor: "#e0e0e0",
            borderRadius: "50%",
          }}
        />
        <ModalBody>
          <div className="">
            <div className="w-full h-40 flex items-center justify-center">
              <img
                src={product?.image}
                
                className="max-h-full object-contain"
              />
            </div>
            <div className="text-center pt-6">
              <h2>{product?.title}</h2>
              <span>{product?.price}</span>
            </div>
          </div>

          <div className="">
            <button className="cursor-pointer w-full items-center font-bold bg-black text-white h-10 flex justify-center rounded-2xl mt-10"   onClick={(e) => {
           
           addToCart(product)
      
         }}>
                Add to cart
                </button>
          </div>
        </ModalBody>
   
      </ModalContent>
    </Modal>
  );
}
