import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

const OrderStatusModal = ({ status, onClose }) => {
  const statusContent = {
    confirming: {
      title: "Confirming your order...",
      message: "Please wait while we process your order.",
      color: "text-blue-600",
    },
    confirmed: {
      title: "Order Confirmed!",
      message: "We will contact you shortly.",
      color: "text-green-600",
    },
    failed: {
      title: "Order Failed",
      message: "Please try again or contact support.",
      color: "text-red-600",
    },
  };

  const content = statusContent[status] || {};

  return (
    <AnimatePresence>
      {status && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className={`text-2xl font-semibold ${content.color}`}>
                {content.title}
              </h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>
            <p className="text-gray-600">{content.message}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrderStatusModal;
