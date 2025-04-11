import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./store/productSlice";
import { add } from "./store/cartSlice";
import ProductModal from "./ProductModal";
import { useDisclosure } from "@chakra-ui/react";

export default function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  // const addToCart = (product) => {
  //   dispatch(add(product));
  // };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    onOpen();
  };

  if (status === "loading") {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (status === "failed") {
    return <p className="text-center mt-10 text-red-500">Failed to load products</p>;
  }

  return (
    <div className="max-w-[90%] mx-auto mt-10">
      <h1 className="text-5xl text-center font-bold pb-10">Product Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow flex flex-col justify-center items-center cursor-pointer"
            onClick={() => handleProductClick(product)}
          >
            <div className="w-full h-40 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full object-contain"
              />
            </div>
            <h3 className="text-sm font-medium mt-2 line-clamp-2">
              {product.title}
            </h3>
            <p className="text-gray-700 font-bold mt-1">${product.price}</p>
            {/* <button
              className="bg-blue-500 text-white px-3 py-1 rounded-lg mt-5"
              onClick={(e) => {
           
                addToCart(product);
              }}
            >
              Add to cart
            </button> */}
          </div>
        ))}
      </div>

   
      <ProductModal
        isOpen={isOpen}
        onClose={onClose}
        product={selectedProduct}
      />
    </div>
  );
}
