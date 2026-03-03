import { useEffect, useState } from "react";
import './countdown.css'

function Countdown() {
  const calculateTimeLeft = () => {
    const targetDate = new Date(new Date().getFullYear(), 3, 30, 23, 59, 59);
    // Mes 3 = Abril (porque enero es 0)

    const difference = targetDate - new Date();

    if (difference <= 0) {
      return null;
    }

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return <h2>Hoje é seu aniversario meu amor, feliz aniversario, te amo!</h2>;
  }

  return (
    <div className="date-container-page" >
      <h2 className="playwrite-at-title" style={{ fontSize: '1.4rem' }} >Cuenta regresiva ⏳</h2>

      <div className="card-date-container poppins-regular">
        <div className="card-item">
          <figure className="card-date">{timeLeft.dias}</figure>
          <span className="card-label">Días</span>
        </div>

        <div className="separator">:</div>

        <div className="card-item">
          <figure className="card-date">{timeLeft.horas}</figure>
          <span className="card-label">Horas</span>
        </div>

        <div className="separator">:</div>

        <div className="card-item">
          <figure className="card-date">{timeLeft.minutos}</figure>
          <span className="card-label">Minutos</span>
        </div>

        <div className="separator">:</div>

        <div className="card-item">
          <figure className="card-date">{timeLeft.segundos}</figure>
          <span className="card-label">Segundos</span>
        </div>
      </div>

      <h2 className="playwrite-at-title" style={{ fontSize: '1.2rem', textAlign:'center' }} >30 de abril ✈️🎂🎉🎁🎈</h2>


      {/* <p>
        {timeLeft.dias}d {timeLeft.horas}h {timeLeft.minutos}m {timeLeft.segundos}s
      </p> */}
    </div>
  );
}

export default Countdown;