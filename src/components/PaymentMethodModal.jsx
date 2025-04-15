import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export default function PaymentMethodModal({ isOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent
        borderRadius="2xl">
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
          <div className="pt-28">
            <h1 className="text-lg font-bold">Payment methods</h1>

            <div className="pb-5">
              <div className="flex items-center justify-between border-b pb-5 pt-4">
                <div className="flex items-center gap-x-3">
                  <div className="w-9 h-9">
                    <img
                      src="/images/credit-card.webp"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h1 className="font-bold text-lg">Card</h1>
                </div>
                <button className="bg-green-300 px-3 py-1">Choose</button>
              </div>
              <div className="flex items-center justify-between border-b pb-5 pt-4">
                <div className="flex items-center gap-x-3">
                  <div className="w-9 h-9">
                    <img
                      src="/images/epay.webp"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h1 className="font-bold text-lg">Apple Pay</h1>
                </div>
                <button className="bg-green-300 px-3 py-1">Choose</button>
              </div>
              <div className="flex items-center justify-between border-b pb-5 pt-4">
                <div className="flex items-center gap-x-3">
                  <div className="w-9 h-9">
                    <img
                      src="/images/gpay.webp"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h1 className="font-bold text-lg">Google Pay</h1>
                </div>
                <button className="bg-green-300 px-3 py-1">Choose</button>
              </div>
              <div className="flex items-center justify-between border-b pb-5 pt-4">
                <div className="flex items-center gap-x-3">
                  <div className="w-9 h-9">
                    <img
                      src="/images/cashPay.png"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h1 className="font-bold text-lg">COD</h1>
                </div>
                <button className="bg-green-300 px-3 py-1">Choose</button>
              </div>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
