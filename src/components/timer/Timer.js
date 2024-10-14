import React, { useState, useEffect } from 'react';
import {
  CountdownContainer,
  TimeBox,
  TimeNumber,
  TimeLabel,
  Title,
  TimeBoxCon,
} from './timerStyles';

const Timer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('November 24, 2024 00:00:00').getTime();
    const currentDate = new Date().getTime();
    const difference = targetDate - currentDate;

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <CountdownContainer>
      <Title>Big Summer Event</Title>
      <TimeBoxCon>
        <TimeBox>
          <TimeNumber>{timeLeft.days || '0'}</TimeNumber>
          <TimeLabel>Days</TimeLabel>
        </TimeBox>
        <TimeBox>
          <TimeNumber>{timeLeft.hours || '0'}</TimeNumber>
          <TimeLabel>Hours</TimeLabel>
        </TimeBox>
        <TimeBox>
          <TimeNumber>{timeLeft.minutes || '0'}</TimeNumber>
          <TimeLabel>Minutes</TimeLabel>
        </TimeBox>
        <TimeBox>
          <TimeNumber>{timeLeft.seconds || '0'}</TimeNumber>
          <TimeLabel>Seconds</TimeLabel>
        </TimeBox>
      </TimeBoxCon>
    </CountdownContainer>
  );
};

export default Timer;
