import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const Widgets = ({ title, subtitle, icon, increase }) => {
  const theme = useTheme();

  return (
    <Box
      gridColumn="span 3"
      gridRow="span 1"
      width="100%"
      ml={1.5}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      p="1.25rem 1rem"
      flex="1 1 100%"
      borderRadius="0.55rem"
      sx={{
        backgroundImage:
          " linear-gradient(to right, #00cccc, #00c4c9, #00bcc6, #00b4c2, #07acbe, #0aacc1, #0facc3, #14acc6, #12b3d0, #10bbdb, #0ec2e5, #0dcaf0)",
      }}>
      <Box display="flex" justifyContent="space-between">
        <Box>
          {icon}
          <Typography
            variant="h5"
            fontWeight="bold"
            mt={5}
            sx={{ color: theme.palette.primary[700] }}>
            {title}
          </Typography>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          flexDirection="column"
          gap="30px">
          <Typography
            variant="h6"
            fontWeight="700"
            sx={{ color: theme.palette.secondary.dark }}>
            {subtitle}
          </Typography>
          <Typography
            variant="h6"
            fontWeight="600"
            fontStyle="italic"
            ml={4}
            sx={{ color: theme.palette.primary.dark }}>
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Widgets;
