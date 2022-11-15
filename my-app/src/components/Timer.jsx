import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useRef, useEffect } from "react";

const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("January 1, 2023 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

if (distance < 0) {
  //stop out timer
  clearInterval(interval.current);
}
else {
   setTimerDays(days);
   setTimerHours (hours);
   setTimerMinutes (minutes);
   setTimerSeconds (seconds);
}
    }, 1000);
  };

useEffect(()=>{
    startTimer();
})

  return (
    <Box
      sx={{
        border: "1px solid",
        borderRadius: "5px",
        display: "grid",
        gridTemplateColumns: "repeat (7, 1fr)",
        maxWidth: 700,
        marginLeft: 27,
        marginBottom: 7,
      }}
    >
      <Typography
        sx={{
          marginLeft: 25,
          fontSize: 25,
          fontStyle: "italic",
        }}
      >
        До конца акции осталось:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flex: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            marginLeft: 5,
            marginRight: 8,
          }}
        >
          <Typography
            sx={{
              fontSize: 25,
              fontStyle: "italic",
            }}
          >
            {timerDays}
          </Typography>
          <p>Дней</p>
        </Box>
        <Typography
          sx={{
            fontSize: 20,
          }}
        >
          :
        </Typography>
        <Box
          sx={{
            marginLeft: 5,
            marginRight: 8,
          }}
        >
          <Typography
            sx={{
              fontSize: 25,
              fontStyle: "italic",
            }}
          >
            {timerHours}
          </Typography>
          <p>Часов</p>
        </Box>
        <Typography
          sx={{
            fontSize: 20,
          }}
        >
          :
        </Typography>
        <Box
          sx={{
            marginLeft: 5,
            marginRight: 8,
          }}
        >
          <Typography
            sx={{
              fontSize: 25,
              fontStyle: "italic",
            }}
          >
            {timerMinutes}
          </Typography>
          <p>Минут</p>
        </Box>
        <Typography
          sx={{
            fontSize: 20,
          }}
        >
          :
        </Typography>
        <Box
          sx={{
            marginLeft: 5,
            marginRight: 8,
          }}
        >
          <Typography
            sx={{
              fontSize: 25,
              fontStyle: "italic",
            }}
          >
            {timerSeconds}
          </Typography>
          <p>Секунд</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Timer;
