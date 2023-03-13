import { Box, Rating, Typography } from "@mui/material";

const { styled } = require("@mui/system");

const Cardd = ({ item }) => {
  return (
    <Container>
      <Image src={item?.image} alt={item?.title} />
      <Category>{item?.category}</Category>
      <Title>{item?.title.slice(0, 18) + "..."}</Title>
      <Details>
        <Typography variant="h6">
          {item?.description.slice(0, 150) + "..."}
        </Typography>
      </Details>
      <Bottom>
        <Price>{item?.price}$</Price>
        <Rating value={item?.rating.rate} readOnly />
      </Bottom>
    </Container>
  );
};

const Container = styled(Box)(({ theme }) => ({
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "10px",
  backgroundColor: theme.palette.background.alt,
}));
const Title = styled("h2")(({ theme }) => ({
  fontSize: "28px",
  fontWeight: "bold",
  color: theme.palette.accentColor.teal,
  marginTop: "8px",
}));
const Category = styled("p")(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "700",
  color: theme.palette.accentColor.blue,
  marginTop: "4px",
  marginRight: "+50%",
  textTransform: "uppercase",
}));
const Image = styled("img")({
  height: "320px",
  width: "100%",
  borderRadius: "12px",
});
const Details = styled(Box)({
  padding: "10px",
});
const Bottom = styled(Box)({
  borderTop: "1px solid #0a0b0e",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
});
const Price = styled("h3")(({ theme }) => ({
  fontSize: "22px",
  fontWeight: "bold",
  color: theme.palette.accentColor.green,
  padding: "6px 10px",
  backgroundColor: "#d1ecf1",
  borderRadius: "12px",
  marginRight: "10%",
}));

export default Cardd;
