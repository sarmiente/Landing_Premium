import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ModalCard = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <motion.div
      initial={{
        y: -200,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
        duration: 1000,
      }}
      exit={{
        y: -200,
        opacity: 0,
        duration: 1000,
      }}
      onEnter={() => setIsVisible(true)}
      onExit={() => setIsVisible(false)}
      className={`flex flex-col justify-center items-center w-full h-screen bg-gray-100 px-5 py-10 fixed z-50 inset-0 overflow-y-auto`}
    >
      {isVisible && (
        <div className={`bg-white rounded-lg border border-gray-300 p-5`}>
          <h1 className="text-2xl font-semibold">¡Bienvenido!</h1>
          <p>
            Este es un pop up card que se abre cuando se abre inicialmente la
            página y cuando se refresca.
          </p>
          <button
            className="btn btn-primary"
            onClick={() => setIsVisible(false)}
          >
            Cerrar
          </button>
        </div>
      )}
    </motion.div>
  );
};

export default ModalCard;
