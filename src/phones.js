import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

import { CarContext } from "./context/carContext";
import { MassegContext } from "./context/masseg";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { v4 as uuidv4 } from "uuid";
import axios from "axios";

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

  // const [phone, setPhone] = useState([{name: "", id: 1, images: [{"url": "/s25Ultra.jpg"}]}, {name: "", id: 2, images: [{"url": "/iPhone17Pro.jpg"}]}, {name: "", id: 3, images: [{"url": "/oppoFindX9Pro.jpg"}]}]);

  // useEffect(() => {
  //   axios
  //     .get("https://dummyjson.com/products/category/smartphones")
  //     .then((response) => {
  //       console.log(response.data)
  //       setPhone(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  
  const phoneMap = phone.map((p) => (
    <Card
      style={{
        width: "150px",
        height: "270px",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px",
      }}
      key={p.id}
    >
      <CardMedia
        component="img"
        height="80"
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
        width: "100%",
        height: "auto",
        overflowY: "auto",
        boxSizing: "border-box",
        columns: "3",
        columnGap: "20px",
        display: "flex",
        flexWrap: "wrap",
        }}
    >
      {phoneMap}
    </div>
  );
}
