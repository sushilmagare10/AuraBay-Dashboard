import React from "react";
import { Box, CircularProgress, useMediaQuery } from "@mui/material";
import Header from "../components/Header";
import Card from "../components/Card";

import { useGetProductsQuery } from "../state/api";

const Products = () => {
  const isTabMobile = useMediaQuery("(min-width: 1000px)");
  const isMobile = useMediaQuery("(min-width: 800px)");

  const { data, isLoading } = useGetProductsQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Products" subtitle="Get all products" />
      {data || !isLoading ? (
        <Box
          mt={5}
          display="grid"
          gridTemplateColumns="repeat(4,1fr)"
          justifyContent="space-between"
          rowGap="20px"
          columnGap="1.33%"
          sx={{
            "& > div": { gridColumn: isTabMobile ? undefined : "span 2" } && {
              gridColumn: isMobile ? undefined : "span 4",
            },
          }}>
          {data.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </Box>
      ) : (
        <>
          <CircularProgress />
        </>
      )}
    </Box>
  );
};

export default Products;
