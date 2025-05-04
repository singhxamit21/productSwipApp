import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../MockData';

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cartItems, setCartItems] = useState([]); 
    const [products, setProducts] = useState(MOCK_PRODUCTS); 
    const [isCartOpen, setIsCartOpen] = useState(false); 

    const handleSwipe = (direction) => {
        const product = products[currentIndex];

        if (direction === 'right') {
            setCartItems((prevCart) => [...prevCart, product]);
        }

       
        const newProducts = products.filter((_, index) => index !== currentIndex);
        setProducts(newProducts);

     
        setCurrentIndex((prevIndex) => (prevIndex + 1) % newProducts.length);
    };

    const toggleCartModal = () => {
        setIsCartOpen(!isCartOpen);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-xl mx-auto p-4">
                {products.length > 0 ? (
                    <div className="flex justify-center items-center">
                        <ProductCard
                            product={products[currentIndex]}
                            onSwipe={handleSwipe}
                        />
                    </div>
                ) : (
                    <div className="text-xl text-center">No more products</div>
                )}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                    <button
                        onClick={toggleCartModal}
                        className="bg-blue-500 text-white py-2 px-4 rounded-full cursor-pointer"
                    >
                        Cart ({cartItems.length})
                    </button>
                </div>

                {isCartOpen && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white w-11/12 max-w-md p-6 rounded-lg shadow-lg">
                            <h3 className="text-xl font-semibold mb-4">Your Cart</h3>
                            {cartItems.length === 0 ? (
                                <div>No items in cart</div>
                            ) : (
                                <div className="max-h-96 overflow-y-auto space-y-4">
                                    {cartItems.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-4">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.name}
                                                className="w-16 h-16 object-cover rounded-md"
                                            />
                                            <div>
                                                <h4 className="font-semibold">{item.name}</h4>
                                                <p className="text-gray-600">${item.price}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            <button
                                onClick={toggleCartModal}
                                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full w-full cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HomePage;
