import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaShoppingCart, FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import emailjs from "@emailjs/browser";
import Confirm from "@/components/Confirm";

const breakfastItems = [
  { id: 1, name: "Classic Pancakes", price: 8.99, image: "/por.png" },
  { id: 2, name: "Avocado Toast", price: 10.99, image: "/drink.png" },
  { id: 3, name: "Eggs Benedict", price: 12.99, image: "/burger.png" },
];

const MakeOrder = () => {
  const [cart, setCart] = useState({});
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [orderStatus, setOrderStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const addToCart = (id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (newCart[id] > 0) {
        newCart[id]--;
      }
      if (newCart[id] === 0) {
        delete newCart[id];
      }
      return newCart;
    });
  };

  const getTotalPrice = () => {
    return Object.entries(cart)
      .reduce((total, [id, quantity]) => {
        const item = breakfastItems.find((item) => item.id === parseInt(id));
        return total + item.price * quantity;
      }, 0)
      .toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOrderStatus("confirming");
    setIsCheckoutOpen(false);

    const orderDetails = Object.entries(cart)
      .map(([id, quantity]) => {
        const item = breakfastItems.find((item) => item.id === parseInt(id));
        return `${item.name} x ${quantity} - $${(item.price * quantity).toFixed(
          2
        )}`;
      })
      .join("\n");

    const emailParams = {
      to_email: "your-email@example.com", // Replace with your email
      from_name: formData.name,
      message: `
        New Order:
        
        ${orderDetails}
        
        Total: $${getTotalPrice()}
        
        Customer Details:
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Address: ${formData.address}
        City: ${formData.city}
        Zip Code: ${formData.zipCode}
      `,
    };

    try {
      await emailjs.send(
        "service_i5jxj6a",
        "template_7l00lww",
        emailParams,
        "9e-dDk8AcnnCTTCUv"
      );
      setOrderStatus("confirmed");
      setTimeout(() => {
        setCart({});
        setOrderStatus(""); // This will close the modal
      }, 3000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setOrderStatus("failed");
    }
  };

  const handleCloseModal = () => {
    setOrderStatus("");
    if (orderStatus === "confirmed") {
      setCart({});
    }
  };

  return (
    <div className=" bg-white font-space ">
      <Navbar />
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl mt-20 font-bold text-center text-gray-800 mb-12"
        >
          Make Your Order
        </motion.h1>

        <AnimatePresence>
          {isCheckoutOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className=" bg-opacity-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
              >
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-semibold">Checkout</h2>
                  <button
                    onClick={() => setIsCheckoutOpen(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>
                </div>
                {orderStatus === "confirming" && (
                  <div className="text-center py-4">
                    <p className="text-lg font-semibold">
                      Confirming your order...
                    </p>
                    <p className="text-sm text-gray-600">
                      Please wait while we process your order.
                    </p>
                  </div>
                )}
                {orderStatus === "confirmed" && (
                  <div className="text-center py-4">
                    <p className="text-lg font-semibold text-green-600">
                      Order Confirmed!
                    </p>
                    <p className="text-sm text-gray-600">
                      We will contact you shortly.
                    </p>
                  </div>
                )}
                {orderStatus === "failed" && (
                  <div className="text-center py-4">
                    <p className="text-lg font-semibold text-red-600">
                      Order Failed
                    </p>
                    <p className="text-sm text-gray-600">
                      Please try again or contact support.
                    </p>
                  </div>
                )}
                {orderStatus === "" && (
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="name"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="address"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="city"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-2"
                        htmlFor="zipCode"
                      >
                        Zip Code
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                      />
                    </div>
                    <div className="border-t pt-4 mb-4">
                      <h3 className="font-semibold mb-2">Order Summary</h3>
                      {Object.entries(cart).map(([id, quantity]) => {
                        const item = breakfastItems.find(
                          (item) => item.id === parseInt(id)
                        );
                        return (
                          <div
                            key={id}
                            className="flex justify-between items-center mb-1"
                          >
                            <span>
                              {item.name} x {quantity}
                            </span>
                            <span>${(item.price * quantity).toFixed(2)}</span>
                          </div>
                        );
                      })}
                      <div className="flex justify-between items-center font-semibold mt-2">
                        <span>Total:</span>
                        <span>${getTotalPrice()}</span>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-green-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                    >
                      Confirm Order
                    </button>
                  </form>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 bg-white mb-12 rounded-lg shadow-lg p-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Order
          </h2>
          {Object.keys(cart).length === 0 ? (
            <p className="text-gray-600">Your cart is empty</p>
          ) : (
            <>
              {Object.entries(cart).map(([id, quantity]) => {
                const item = breakfastItems.find(
                  (item) => item.id === parseInt(id)
                );
                return (
                  <div
                    key={id}
                    className="flex justify-between items-center mb-2"
                  >
                    <span>
                      {item.name} x {quantity}
                    </span>
                    <span>${(item.price * quantity).toFixed(2)}</span>
                  </div>
                );
              })}
              <div className="border-t pt-4 mt-4">
                <div className="flex justify-between items-center text-xl font-semibold">
                  <span>Total:</span>
                  <span>${getTotalPrice()}</span>
                </div>
              </div>
              <button
                onClick={() => setIsCheckoutOpen(true)}
                className="mt-6 w-full bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center"
              >
                <FaShoppingCart className="mr-2" />
                Place Order
              </button>
            </>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {breakfastItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-600 mb-4">${item.price.toFixed(2)}</p>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                  >
                    <FaMinus />
                  </button>
                  <span className="text-xl font-semibold">
                    {cart[item.id] || 0}
                  </span>
                  <button
                    onClick={() => addToCart(item.id)}
                    className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition-colors"
                  >
                    <FaPlus />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Checkout Modal */}
      <Confirm status={orderStatus} onClose={handleCloseModal} />
    </div>
  );
};

export default MakeOrder;
