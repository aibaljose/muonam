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
      background: 'linear-gradient(135deg, #fffbe6 0%, #ffe5b4 100%)',
      fontFamily: 'Poppins, sans-serif',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top accent line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 8,
        background: 'linear-gradient(90deg, #bb5c5c 0%, #e7b96c 100%)',
        zIndex: 2,
      }} />
      {/* Bottom accent line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 8,
        background: 'linear-gradient(90deg, #e7b96c 0%, #bb5c5c 100%)',
        zIndex: 2,
      }} />
      {/* Decorative vertical line */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: 0,
        height: '100%',
        width: 3,
        background: 'linear-gradient(180deg, #bb5c5c 0%, #e7b96c 100%)',
        opacity: 0.12,
        zIndex: 1,
        transform: 'translateX(-50%)',
      }} />
      <img src={maveli} alt="Maveli" style={{ width: 120, marginBottom: 24, zIndex: 3 }} />
      <h1 style={{ fontSize: 44, color: '#bb5c5c', fontWeight: 800, marginBottom: 8, letterSpacing: 1, zIndex: 3, textShadow: '0 2px 8px #e7b96c55' }}>MuLearn Onam Treasure Hunt</h1>
      <h2 style={{ fontSize: 26, color: '#222', fontWeight: 500, marginBottom: 24, zIndex: 3 }}>August 25, 2025</h2>
      <div style={{
        background: '#fff',
        borderRadius: 20,
        padding: '28px 40px',
        boxShadow: '0 6px 32px rgba(187,92,92,0.10)',
        marginBottom: 36,
        textAlign: 'center',
        border: '2px solid #e7b96c',
        zIndex: 3,
        maxWidth: 400,
      }}>
        <h3 style={{ color: '#bb5c5c', fontWeight: 700, marginBottom: 16, fontSize: 22 }}>Countdown to the Hunt</h3>
        <div style={{ fontSize: 32, fontWeight: 700, color: '#222', letterSpacing: 1 }}>
          {timeLeft.total > 0 ? (
            <span>
              {timeLeft.days}d <span style={{ color: '#e7b96c' }}>{timeLeft.hours}h</span> {timeLeft.minutes}m {timeLeft.seconds}s
            </span>
          ) : (
            <span style={{ color: '#e7b96c' }}>The hunt has begun!</span>
          )}
        </div>
      </div>
      <p style={{ fontSize: 20, color: '#444', maxWidth: 520, textAlign: 'center', marginBottom: 28, zIndex: 3, lineHeight: 1.5 }}>
        Welcome to the <span style={{ color: '#bb5c5c', fontWeight: 600 }}>MuLearn Onam Treasure Hunt</span>!<br />
        Get ready for a day of clues, challenges, and fun.<br />
        The adventure starts on <span style={{ color: '#e7b96c', fontWeight: 600 }}>August 25th</span>.<br />
        Stay tuned and prepare to join the hunt!
      </p>
      <img src={maveli} alt="Onam" style={{ width: 80, marginTop: 16, zIndex: 3 }} />
    </div>
  );
};

export default LandingPage;
