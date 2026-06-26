import "./App.css";
import ECommerce from "./E-Commerce";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Phones from "./phones";
import Athath from "./athath";
import CarCard from "./carCard";

import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";

import { CarContext } from "./context/carContext";
import { useState, useContext } from "react";
import { CategoryContext } from "./context/categorys";
import { MassegContext } from "./context/masseg";

import { v4 as uuidv4 } from "uuid";

function App() {
  const [car, setCar] = useState([
    {
      id: uuidv4(),
      name: "s25 ultra - 512G, 12RAM",
      price: 55000,
      img: "/s25Ultra.jpg",
      sale: "",
      check: false,
      itemNum: 1,
    },
  ]);
  const [open, setOpen] = useState(false);
  const [mass, setMass] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const menuWidth = menuOpen ? "400px" : "50px";

  const categorys = useContext(CategoryContext);
  const categoriesMap = categorys.map((c) => (
    <Button
      key={c.name}
      variant="text"
      component={Link}
      to={`/${c.name}`}
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        color: "rgb(50, 50, 50)",
        fontFamily: "Lalezar",
        fontSize: "16px",
      }}
    >
      <span>{c.name}</span>
    </Button>
  ));

  return (
    <MassegContext.Provider value={[mass, setMass]}>
      <CarContext.Provider value={{ car, setCar }}>
        <Router>
          <div
            style={{
              width: "100vw",
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-start",
              overflowX: "hidden",
            }}
          >
            {/* masseg */}
            {mass ? (
              <div
                style={{
                  background: "white",
                  minWidth: "200px",
                  height: "50px",
                  position: "absolute",
                  top: "550px",
                  borderRadius: "10px",
                  boxShadow: "1px 3px 5px -3px rgba(0, 0, 0, 0.75)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "Lalezar",
                  color: "#00897b",
                  fontSize: "18px",
                }}
              >
                {mass}
              </div>
            ) : null}
            {/* masseg closse */}
            <header
              style={{
                background: "rgb(200, 200, 200)",
                display: "flex",
                gap: "10px",
                borderRadius: "8px",
                padding: "10px",
                justifyContent: "space-between",
                alignItems: "center",
                width: "90%",
                height: "60px",
                boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
                zIndex: "1000",
              }}
            >
              <div
                style={{ position: "relative", display: "inline-block" }}
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
              >
                {/* زر الفئات */}
                <Button
                  className="header"
                  style={{
                    width: "70px",
                    height: "auto",
                    minWidth: "40px",
                    borderRadius: "5px",
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgb(50, 50, 50)",
                    fontFamily: "Lalezar",
                  }}
                >
                  الفئات
                  <KeyboardArrowDownIcon />
                </Button>

                {/* القائمة */}
                {open && (
                  <div
                    style={{
                      position: "absolute",
                      top: "110%",
                      right: 0,
                      background: "white",
                      minWidth: "160px",
                      borderRadius: "10px",
                      boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                      display: "flex",
                      flexDirection: "column",
                      overflow: "hidden",
                    }}
                  >
                    {categoriesMap}
                  </div>
                )}
              </div>
              <Button to="/" style={{ textDecoration: "none" }}>
                <h1
                  style={{
                    color: "black",
                    fontFamily: "logo",
                  }}
                >
                  YG
                </h1>
              </Button>

              <Container
                style={{
                  display: "flex",
                  justifyContent: "center",
                  width: "50%",
                  alignItems: "center",
                  gap: "0",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    width: "45px",
                    height: "40px",
                    minWidth: "45px",
                    borderRadius: "0 5px 5px 0",
                    padding: "0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#00897b",
                  }}
                >
                  <SearchIcon />
                </Button>

                <input
                  className="header"
                  type="text"
                  placeholder="بحث عن..."
                  style={{
                    width: "calc(100% - 45px)",
                    height: "40px",
                    borderRadius: "5px 0 0 5px",
                    border: "2px solid #ccc",
                    paddingLeft: "12px",
                    paddingRight: "12px",
                    fontFamily: "Lalezar",
                    fontSize: "14px",
                    outline: "none",
                    transition: "border-color 0.3s",
                  }}
                  dir="rtl"
                />
              </Container>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    width: "auto",
                  }}
                >
                  <div
                    className="hButs"
                    onClick={() => setMenuOpen((prev) => !prev)}
                    data-menu-open={menuOpen}
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      width: menuWidth,
                      overflow: "hidden",
                      transition: "0.35s ease",
                    }}
                  >
                    <Button variant="text" component={Link} to="/">
                      <HomeIcon style={{ color: "#00897b" }} />
                    </Button>
                    <Button variant="text" component={Link} to="/العربه">
                      <ShoppingCartIcon style={{ color: "#00897b" }} />
                    </Button>
                    <Button variant="text" component={Link} to="/الحساب">
                      <AccountCircleIcon style={{ color: "#00897b" }} />
                    </Button>
                    <Button variant="text" component={Link} to="/الحساب">
                      <Brightness4Icon style={{ color: "#00897b" }} />
                    </Button>
                    <Button aria-label="Toggle menu">
                      <MenuIcon
                        style={{
                          color: "gray",
                        }}
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </header>

            <div
              style={{
                width: "100%",
                minHeight: "calc(100vh - 120px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                overflowX: "hidden",
              }}
            >
              <Routes>
                <Route path="/" element={<ECommerce />} />
                <Route path="/هواتف" element={<Phones />} />
                <Route path="/اثاث" element={<Athath />} />
                <Route path="/العربه" element={<CarCard />} />
              </Routes>
            </div>
            <div
              style={{
                width: "100%",
                height: "50px",
                background: "rgb(200, 200, 200)",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span style={{ fontFamily: "Lalezar", color: "rgb(50, 50, 50)" }}>
                جميع الحقوق محفوظة &copy; 2026
              </span>
            </div>
          </div>
        </Router>
      </CarContext.Provider>
    </MassegContext.Provider>
  );
}

export default App;
