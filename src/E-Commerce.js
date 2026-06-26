import React, { useState, useContext } from "react";
import { CategoryContext } from "./context/categorys";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

export default function ECommerce() {
const categorys = useContext(CategoryContext);

  const gateorysList = categorys.map((c) => (
    <Link to={c.name} style={{ textDecoration: "none" }} key={c.name}>
      <Card style={{ minWidth: 200, height: 250 }} key={c.name}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={c.img} alt={c.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ fontFamily: "Lalezar"}}>
              {c.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  ));

  return (
    <div
      style={{
        width: "90%",
        background: "rgb(230, 230, 230)",
        minHeight: "100vh",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        style={{
          width: "100%",
          display: "flex",
          gap: "20px",
          marginBottom: "20px",
          overflowX: "auto",
          height: "auto",
          background: "rgb(200, 200, 200)",
          padding: "20px",
          borderRadius: "8px",
          marginTop: "25px",
        }}
      >
        {gateorysList}
      </Container>

      <main>
        <p style={{ color: "black" }}>Welcome to the E-Commerce page!</p>
      </main>
        </div>

  );
}
