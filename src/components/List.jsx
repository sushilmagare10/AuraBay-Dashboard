import React, { useState } from "react";
import { Box, TextareaAutosize, useTheme } from "@mui/material";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";

const { styled } = require("@mui/system");

const List = () => {
  const [file, setFile] = useState("");
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection={{ xs: "column", md: "row" }}
      height="50vh">
      <Left>
        <Image
          src={
            file
              ? URL.createObjectURL(file)
              : "https://t4.ftcdn.net/jpg/04/99/93/31/360_F_499933117_ZAUBfv3P1HEOsZDrnkbNCt4jc3AodArl.jpg"
          }
          alt=""
        />
      </Left>
      <Right>
        <Form>
          <FormInput>
            <Label htmlFor="file">
              Image
              <DriveFolderUploadOutlinedIcon sx={{ cursor: "pointer" }} />
            </Label>
            <Input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </FormInput>
          <FormInput>
            <Label>Tilte</Label>
            <Input type="text" placeholder="Product Name" />
          </FormInput>
          <FormInput>
            <Label>Category</Label>
            <Input type="text" placeholder="Category" />
          </FormInput>
          <FormInput>
            <Label>Color</Label>
            <Input type="text" placeholder="Color" />
          </FormInput>
          <FormInput>
            <Label>Size</Label>
            <Input type="text" />
          </FormInput>
          <FormInput>
            <Label>Price</Label>
            <Input type="text" placeholder="Price $" />
          </FormInput>
          <FormInput>
            <Label>Description</Label>
            <TextareaAutosize
              sx={{ backgroundColor: theme.palette.background.alt }}
              rows="5"
              type="text"
              placeholder="Product Desciption"
            />
          </FormInput>
          <FormInput>
            <Button>Add Product</Button>
          </FormInput>
        </Form>
      </Right>
    </Box>
  );
};

const Image = styled("img")({
  width: "380px",
  height: "380px",
  objectFit: "cover",
  textAlign: "center",
  borderRadius: "20px",
});
const FormInput = styled(Box)({
  width: "40%",
});
const Form = styled("form")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  flexWrap: "wrap",
  gap: "30px",
  backgroundColor: theme.palette.background.alt,
  height: "95%",
}));
const Label = styled("label")({
  display: "flex",
  alignItems: "center",
  fontSize: "18px",
  fontWeight: "bold",
  gap: "10px",
});

const Input = styled("input")(({ theme }) => ({
  width: "100%",
  padding: "5px",
  border: "none",
  borderBottom: "1px solid #eee",
  backgroundColor: theme.palette.background.alt,
}));
const Button = styled("button")(({ theme }) => ({
  width: "160px",
  backgroundColor: theme.palette.accentColor.teal,
  padding: "16px",
  borderRadius: "8px",
  color: "#fff",
  fontWeight: "bold",
  cursor: "pointer",
  marginTop: "10px",
  border: "none",
}));
const Left = styled(Box)(({ theme }) => ({
  flex: "1",
  backgroundColor: theme.palette.background.alt,
  padding: "30px",
}));
const Right = styled(Box)(({ theme }) => ({
  flex: "1",
  backgroundColor: theme.palette.background.alt,
  padding: "30px",
}));

export default List;
