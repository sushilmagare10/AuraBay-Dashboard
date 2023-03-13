import { Box } from "@mui/material";
import React from "react";
import BarChart from "../components/BarChart";
import Header from "../components/Header";

const Bar = () => {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar chart" />
      <Box height="80vh">
        <BarChart />
      </Box>
    </Box>
  );
};

export default Bar;
