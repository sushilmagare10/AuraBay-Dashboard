import { Box } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import LineChart from "../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar chart" />
      <Box height="60vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
