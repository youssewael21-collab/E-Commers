import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { CarContext } from "./context/carContext";
import { MassegContext } from "./context/masseg";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
export default function Phones() {
  const { car, setCar } = useContext(CarContext);
  const [mass, setMass] = useContext(MassegContext);

  const [phone, setPhone] = useState([
    {
      id: uuidv4(),
      name: "s25 ultra - 512G, 12RAM",
      price: 55000,
      img: "/s25Ultra.jpg",
      sale: "",
      check: false,
      itemNum: 1,
    },
    {
      id: uuidv4(),
      name: "iPhone 17 pro - 256G, 12RAM",
      price: 75000,
      img: "/iPhone17Pro.jpg",
      sale: "",
      check: false,
      itemNum: 1,
    },
    {
      id: uuidv4(),
      name: "oppo find x9 pro - 512G, 12RAM",
      price: 35000,
      img: "/oppoFindX9Pro.jpg",
      sale: "",
      check: false,
      itemNum: 1,
    },
  ]);

  const phoneMap = phone.map((p) => (
    <Card
      style={{
        width: "200px",
        height: "300px",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
      }}
      key={p.id}
    >
      <CardMedia
        component="img"
        height="120"
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
          <h3 style={{ fontFamily: "ditals", color: "#1F1F1F" }}>{p.name}</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            onClick={() => addToCar(p.id)}
            style={{
              color: "white",
              borderRadius: "10px",
              fontFamily: "ditals",
              background: "#00897b",
            }}
            variant="contained"
          >
            {p.price}
            <AddShoppingCartIcon />
          </Button>
        </div>
        <span
          style={{
            color: "#d50000",
            fontFamily: "ditals",
            textDecoration: "line-through",
          }}
        >
          {p.sale}
        </span>
      </CardContent>
    </Card>
  ));

  function addToCar(id) {
    const phoneid = phone.find((p) => p.id === id);
    if (phoneid) {
      setCar([...car, phoneid]);
      setMass("تمت الاضافة الى العربة");
       setTimeout(() => {
        setMass("");
      }, 2000);
    }
  }
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
      }}
    >
      {phoneMap}
    </div>
  );
}
