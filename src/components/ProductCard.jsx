import React from 'react';

const ProductCard = ({ product, onSwipe }) => {
  return (
    <div className="w-full max-w-xs p-4 bg-white shadow-lg rounded-lg transition-all duration-300 transform">
      <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover rounded-lg" />
      <div className="mt-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-gray-500">{product.brand}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-xl font-bold text-green-500">${product.price}</span>
          {product.discountPercentage && (
            <span className="text-sm text-red-500">{product.discountPercentage}% OFF</span>
          )}
        </div>
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => onSwipe('left')}
          className="bg-red-500 text-white py-2 px-4 rounded-full cursor-pointer"
        >
          Dislike
        </button>
        <button
          onClick={() => onSwipe('right')}
          className="bg-green-500 text-white py-2 px-4 rounded-full cursor-pointer"
        >
          Like
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
