import React, { useEffect, useState } from 'react';
import maveli from "./assets/Maveli-12.png";
const EVENT_DATE = new Date('2025-08-25T00:00:00');

function getTimeRemaining() {
  const now = new Date();
  const total = EVENT_DATE - now;
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((total / (1000 * 60)) % 60);
  const seconds = Math.floor((total / 1000) % 60);
  return { total, days, hours, minutes, seconds };
}

const LandingPage = () => {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #ffe5b4 0%, #e7b96c 100%)',
      fontFamily: 'Poppins, sans-serif',
    }}>
      <img src={maveli} alt="Maveli" style={{ width: 120, marginBottom: 24 }} />
      <h1 style={{ fontSize: 40, color: '#bb5c5c', fontWeight: 700, marginBottom: 8 }}>MuLearn Onam Treasure Hunt</h1>
      <h2 style={{ fontSize: 24, color: '#222', fontWeight: 500, marginBottom: 24 }}>August 25, 2025</h2>
      <div style={{
        background: '#fff',
        borderRadius: 16,
        padding: '24px 32px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        marginBottom: 32,
        textAlign: 'center',
      }}>
        <h3 style={{ color: '#bb5c5c', fontWeight: 600, marginBottom: 12 }}>Countdown to the Hunt</h3>
        <div style={{ fontSize: 28, fontWeight: 600, color: '#222' }}>
          {timeLeft.total > 0 ? (
            <span>
              {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
          ) : (
            <span style={{ color: '#e7b96c' }}>The hunt has begun!</span>
          )}
        </div>
      </div>
      <p style={{ fontSize: 18, color: '#444', maxWidth: 500, textAlign: 'center', marginBottom: 24 }}>
        Welcome to the MuLearn Onam Treasure Hunt! Get ready for a day of clues, challenges, and fun. The adventure starts on August 25th. Stay tuned and prepare to join the hunt!
      </p>
      <img src={maveli} alt="Onam" style={{ width: 80, marginTop: 16 }} />
    </div>
  );
};

export default LandingPage;
