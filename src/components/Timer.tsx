import { Box, Text } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

interface IPrice {
  price: number;
}

const Timer = ({ price }: IPrice) => {
  const [days, setDays] = useState(3);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds === 0 && minutes === 0 && hours === 0 && days === 0) {
        clearInterval(intervalId);
        return;
      }
      if (seconds === 0 && minutes === 0 && hours === 0) {
        setDays(days - 1);
        setHours(23);
        setMinutes(59);
        setSeconds(59);
      } else if (seconds === 0 && minutes === 0) {
        setHours(hours - 1);
        setMinutes(59);
        setSeconds(59);
      } else if (seconds === 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [days, hours, minutes, seconds]);

  return (
    <Box border="1px solid green" p={2}>
      <Box fontSize="xs" fontWeight="bold" color="blue.300">
        AUNCTION ENDS IN
      </Box>
      <Text fontWeight="bold">
        {days}:{hours}:{minutes}:{seconds}s
      </Text>
    </Box>
  );
};

export default Timer;
