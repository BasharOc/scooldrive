import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle, FaHeart } from "react-icons/fa";

const Step9 = ({ formData, langContent }) => {
  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="text-center">
      {/* Celebration Effect */}
      <div className="relative mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
          className="inline-block"
        >
          <FaCheckCircle className="text-8xl text-green-500 mx-auto mb-4" />
        </motion.div>

        {/* Confetti particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-[#F5BB00] rounded-full"
            initial={{
              x: 0,
              y: 0,
              opacity: 1,
              scale: 0,
            }}
            animate={{
              x: Math.cos(i * 30) * 100,
              y: Math.sin(i * 30) * 100,
              opacity: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.5,
              delay: 0.5 + i * 0.1,
              ease: "easeOut",
            }}
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Success Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-black mb-4">
          {langContent.title}
        </h2>
        <p className="text-xl text-gray-700 mb-6">{langContent.subtitle}</p>
      </motion.div>

      {/* WhatsApp Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="max-w-md mx-auto bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-8"
      >
        <div className="flex items-center justify-center space-x-3 mb-4">
          <FaWhatsapp className="text-3xl text-green-500" />
          <h3 className="text-xl font-semibold text-green-800">
            {langContent.whatsapp.title}
          </h3>
        </div>
        <p className="text-green-700 text-center">
          {langContent.whatsapp.message}
        </p>
      </motion.div>

      {/* Thank You Message */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        className="text-center"
      >
        <div className="flex items-center justify-center space-x-2 mb-4">
          <span className="text-2xl text-red-500">
            <FaHeart />
          </span>
          <p className="text-lg text-gray-600">
            {langContent.thankYou} {/* Direkt aus dem content-Objekt */}
          </p>
          <span className="text-2xl text-red-500">
            <FaHeart />
          </span>
        </div>
        <p className="text-gray-500">{langContent.thankYouDetail}</p>
      </motion.div>

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.6 }}
        className="mt-8"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#F5BB00] text-black px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-colors"
          onClick={() => (window.location.href = "/")}
        >
          {langContent.button}
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Step9;
