import React, { useState } from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function Phones() {
  const [athath, setAthath] = useState([
    {
      name: " كنبة سرير 220 *  90 كنبة, 220 * 120 سرير",
      price: "5000ج",
      img: "/kanbaSrer.jpg",
      sale: "",
    },
    {
      name: "سفره خشب زان وكتان 5 قطع - بني ورمادي",
      price: "15000ج",
      img: "/sofra.jpg",
      sale: "",
    },
    {
      name: "طقم مزيج نباتات 3 قطع في إناء زرع خشب - 18 سم",
      price: "600ج",
      img: "/zar3.jpg",
      sale: "1200ج",
    },
  ]);

  const athathMap = athath.map((p) => (
    <Card
      sx={{ maxWidth: 180, maxHeight: 300, margin: 1, padding: 3 }}
      key={p.name}
    >
        <CardMedia
          component="img"
          height="140"
          image={p.img}
          alt="green iguana"
        />
        <CardContent>
          <div
            style={{
              height: "100px",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <h2 style={{ fontFamily: "ditals", color: "#1F1F1F" }}>{p.name}</h2>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                color: "white",
                borderRadius: "50px",
                fontFamily: "ditals",
              }}
              variant="contained"
            >
              {p.price}
              <AddShoppingCartIcon />
            </Button>
          </div>
        
          <span style={{ color: "#d50000", fontFamily: "ditals", textDecoration: "line-through"}}>{p.sale}</span>
        </CardContent>
    </Card>
  ));
  return (
    <div
      style={{
        width: "95%",
        height: "auto",
        overflowY: "auto",
        minHeight: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      {athathMap}
    </div>
  );
}
