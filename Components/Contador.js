import { useState, useEffect } from 'react';

const Contador = () => {
  const targetTime = new Date();
  targetTime.setSeconds(targetTime.getSeconds() + 28800); // Añadir 8 horas en segundos

  const [remainingTime, setRemainingTime] = useState(targetTime - new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      const timeDifference = targetTime - currentTime;

      if (timeDifference <= 0) {
        clearInterval(interval);
        setRemainingTime(0);
      } else {
        setRemainingTime(timeDifference);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = Math.floor(remainingTime / (1000 * 60 * 60));
  const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  return (
    <div>
      <h1>¡Oferta por tiempo limitado!</h1>
      <p>
        {hours.toString().padStart(2, '0')}:
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </p>
    </div>
  );
};

export default Contador;
