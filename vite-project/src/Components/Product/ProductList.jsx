// src/Product/ProductList.jsx
import React from "react";
import Product from "./Product";

const products = [
  {
    id: 1,
    title: "Wireless Bluetooth Headphones",
    image: "https://i.pinimg.com/236x/a8/33/7f/a8337f50ffaf22a9f4c350ed63362ec8.jpg",
    price: 59.99,
  },
  {
    id: 2,
    title: "Smartphone - 128GB",
    image: "https://i.pinimg.com/236x/83/39/82/8339823656ee1fb3d5487e9ecd86c971.jpg",
    price: 799.99,
  },
  {
    id: 3,
    title: "Gaming Mouse",
    image: "https://i.pinimg.com/236x/08/58/b9/0858b9b89d5aa64a6eb952293014ef64.jpg",
    price: 29.99,
  },
  {
    id: 4,
    title: "Mechanical Keyboard",
    image: "https://i.pinimg.com/236x/9d/65/2a/9d652a3fc080223d349293a849125bab.jpg",
    price: 89.99,
  },
  {
    id: 5,
    title: "4K Monitor 27 inch",
    image: "https://i.pinimg.com/236x/f0/b9/30/f0b930a6d651adc2bf30ed215f8c1439.jpg",
    price: 249.99,
  },
  {
    id: 6,
    title: "USB-C Hub Adapter",
    image: "https://i.pinimg.com/236x/3a/30/38/3a30386873d533cbfe3b3727147ccb42.jpg",
    price: 19.99,
  },
  {
    id: 7,
    title: "Noise Cancelling Earbuds",
    image: "https://i.pinimg.com/474x/d0/53/31/d053312991e5845ac8233401be5b7e33.jpg",
    price: 99.99,
  },
  {
    id: 8,
    title: "Smart Watch",
    image: "https://i.pinimg.com/474x/43/ed/c7/43edc7c9a3b33d64fb33c54ee344962a.jpg",
    price: 149.99,
  },
  {
    id: 9,
    title: "Portable Power Bank",
    image: "https://i.pinimg.com/236x/dd/8c/e5/dd8ce54661f15b0231c7a5104ce7f46d.jpg",
    price: 39.99,
  },
  {
    id: 10,
    title: "Laptop Stand",
    image: "https://i.pinimg.com/474x/00/59/52/0059521763449ddfcef6f75a17a7a0ed.jpg",
    price: 32.99,
  },
  {
    id: 11,
    title: "Wireless Charger Pad",
    image: "https://i.pinimg.com/236x/ff/f1/e3/fff1e30e16a7d430852c98dadaa24a34.jpg",
    price: 24.99,
  },
  {
    id: 12,
    title: "1080p Webcam",
    image: "https://i.pinimg.com/474x/b0/cf/13/b0cf13293faab118cce9deec78106d12.jpg",
    price: 49.99,
  },
];

const ProductList = () => {
  const handleAddToCart = (product) => {
    console.log("Added to cart:", product);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

export default ProductList;

