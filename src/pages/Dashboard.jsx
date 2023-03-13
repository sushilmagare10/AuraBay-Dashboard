import React from "react";
import { Box, Button, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/Header";
import { DataGrid } from "@mui/x-data-grid";
import { useGetUsersQuery } from "../state/api";

import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import PieChart from "../components/PieChart";
import Widgets from "../components/Widgets";

const Dashboard = () => {
  const theme = useTheme();
  const isNonMobile = useMediaQuery("(min-width:1200px)");
  const { data, isLoading } = useGetUsersQuery();

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.2,
    },
    {
      field: "username",
      headerName: "UserName",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 0.5,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 0.5,
    },
  ];

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DashBoard" subtitle="Welcome to your Dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.accentColor.teal,
              color: theme.palette.grey.dark,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 40px",
            }}>
            Download
            <DownloadOutlinedIcon sx={{ ml: "10px" }} />
          </Button>
        </Box>
      </Box>

      {/* grid */}
      <Box
        mr={5}
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "& > div": { gridColumn: isNonMobile ? undefined : "span 12" },
        }}>
        <Widgets
          title="12,253"
          subtitle="Emails Send"
          increase="+14%"
          icon={<EmailIcon sx={{ fontSize: "40px" }} />}
        />
        <Widgets
          title="11,355"
          subtitle="Orders"
          increase="+24%"
          icon={<PointOfSaleIcon sx={{ fontSize: "40px" }} />}
        />
        <Widgets
          title="17,156"
          subtitle="New Users"
          increase="+7%"
          icon={<PersonAddIcon sx={{ fontSize: "40px" }} />}
        />
        <Widgets
          title="10,568"
          subtitle="Transactions"
          increase="+12%"
          icon={<TrafficIcon sx={{ fontSize: "40px" }} />}
        />
        <Box
          ml={3.3}
          gridColumn="span 12"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          borderRadius="0.55rem"
          p="10px">
          <LineChart />
        </Box>
        <Box
          ml={3.3}
          gridColumn="span 7"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          borderRadius="0.55rem"
          p="10px">
          <BarChart isDashboard={true} />
        </Box>
        <Box
          ml={3.3}
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          borderRadius="0.55rem"
          p="10px">
          <PieChart />
        </Box>

        <Box
          ml={3.3}
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor={theme.palette.background.alt}
          borderRadius="0.55rem"
          p="8px">
          <Box
            mt="40px"
            height="75vh"
            sx={{
              "& .MuiDataGrid-root": {
                border: "none",
                backgroundColor: theme.palette.background.alt,
              },

              "& .MuiDataGrid-columnHeaders": {
                backgroundColor: theme.palette.background.alt,
                color: theme.palette.secondary[500],
                borderBottom: "none",
                fontSize: "20px",
              },
            }}>
            <DataGrid
              loading={isLoading || !data}
              getRowId={(row) => row.id}
              rows={data || []}
              columns={columns}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
