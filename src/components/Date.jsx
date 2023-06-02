import React, { useState } from "react";

import {
  Box,
  Button,
  Container,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";
import moment from "moment";
const Date = () => {
  const [startDate, setStartDate] = useState();
  const [duration, setDuration] = useState({
    days: "",
    months: "",
    years: "",
  });
  const [endDate, setEndDate] = useState();
  const changehandler = (e) => {
    setDuration({
      ...duration,
      [e.target.name]: e.target.value,
    });
  };

  const m = moment(startDate).add({
    days: duration.days,
    months: duration.months,
    years: duration.years,
  });

  const calculateHandler = () => {
    setEndDate(m?.format("YYYY-MM-DD"));
    setDuration({
      days: "",
      months: "",
      years: "",
    });
  };

  return (
    <Container maxWidth="lg" sx={{ textAlign: "center" }}>
      <Typography color={"Highlight"} component={"h1"} fontSize={"50px"}>
        {" "}
        End Date Calculator
      </Typography>
      <Box margin={"25px"}>
        <Box>
          <div>
            <FormLabel>From date</FormLabel>
          </div>
          <TextField
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Box>
        <Box margin={"15px"}>
          <FormLabel>Duration</FormLabel>
          <Box>
            <TextField
              type="number"
              name="years"
              label="years"
              sx={{
                width: "65px",
                margin: "5px",
              }}
              placeholder="(years)"
              onChange={(e) => changehandler(e)}
              value={duration.years}
              InputProps={{
                inputProps: {
                  style: { textAlign: "right" },
                },
              }}
            />

            <TextField
              type="number"
              name="months"
              label="months"
              sx={{
                width: "65px",
                margin: "5px",
              }}
              placeholder="(months)"
              onChange={(e) => changehandler(e)}
              value={duration.months}
              InputProps={{
                inputProps: {
                  style: { textAlign: "right" },
                },
              }}
            />
            <TextField
              type="number"
              label="days"
              sx={{
                width: "65px",
                margin: "5px",
              }}
              InputProps={{
                inputProps: {
                  style: { textAlign: "right" },
                },
              }}
              name="days"
              placeholder="(Days)"
              onChange={(e) => changehandler(e)}
              value={duration.days}
            />
          </Box>
        </Box>
      </Box>
      <Box margin={"15px"}>
        <div>
          <FormLabel>To Date</FormLabel>
        </div>

        <TextField type="date" value={endDate} />
        <Box margin={"25px"}>
          <Button onClick={calculateHandler} variant="contained">
            Calculate End Date
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Date;
