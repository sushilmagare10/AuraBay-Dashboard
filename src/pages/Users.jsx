import React from "react";
import Header from "../components/Header";
import { Box, useTheme } from "@mui/material";
import { useGetUsersQuery } from "../state/api";
import { DataGrid } from "@mui/x-data-grid";

const Users = () => {
  const theme = useTheme();
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
    <Box m="1.5rem 2.5rem">
      <Header title="Users" subtitle="List of All Users" />
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
  );
};

export default Users;
