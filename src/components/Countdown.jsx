import { useState, useEffect } from "react";
import "../styles/Countdown.css";
import { useWeddingData } from "../context/WeddingDataContext";

const Countdown = () => {
  const { event } = useWeddingData();
  const eventStartDate = new Date(`${event.date} ${event.time[0]}`);
  const eventEndDate = new Date(`${event.date} ${event.time[1]}`);

  const calculateTimeLeft = () => {
    const currentDate = new Date();
    let difference = eventStartDate - currentDate;
    let isEventPassed = false;

    if (difference < 0) {
      difference = currentDate - eventEndDate;
      isEventPassed = true;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return {
      isEventPassed,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <h5 className="countdown-header">
        {timeLeft.isEventPassed
          ? "Happily married since"
          : "Countdown to the Big Day"}
      </h5>
      <div className="countdown-container">
        <div className="time-box" style={{ backgroundColor: "maroon" }}>
          <p className="time-value">
            {timeLeft.days > 0 ? timeLeft.days : "0"}
          </p>
          <p className="time-label">Days</p>
        </div>
        <div className="time-box" style={{ backgroundColor: "#9E1B32" }}>
          <p className="time-value">
            {timeLeft.hours > 0 ? timeLeft.hours : "0"}
          </p>
          <p className="time-label">Hours</p>
        </div>
        <div className="time-box" style={{ backgroundColor: "#9E1B32" }}>
          <p className="time-value">
            {timeLeft.minutes > 0 ? timeLeft.minutes : "0"}
          </p>
          <p className="time-label">Minutes</p>
        </div>
        <div className="time-box" style={{ backgroundColor: "maroon" }}>
          <p className="time-value">
            {timeLeft.seconds > 0 ? timeLeft.seconds : "0"}
          </p>
          <p className="time-label">Seconds</p>
        </div>
      </div>
    </>
  );
};

export default Countdown;
