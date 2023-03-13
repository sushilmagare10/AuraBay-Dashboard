import { Box } from "@mui/material";
import React from "react";
import List from "../components/List";
import Header from "../components/Header";

const AddProdcuts = () => {
  return (
    <Box p={2}>
      <Header title="Add Products" />
      <Box padding={2} boxShadow="2x 4px 10px 1px rgba(201,201,201,0.47)">
        <List />
      </Box>
    </Box>
  );
};

export default AddProdcuts;
