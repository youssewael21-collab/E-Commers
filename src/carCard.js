import { useContext } from "react";
import { CarContext } from "./context/carContext";
import { MassegContext } from "./context/masseg";
import { Link } from "react-router-dom";

import CardMedia from "@mui/material/CardMedia";

import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";

export default function CarCard() {
  const { car, setCar } = useContext(CarContext);
  const [mass, setMass] = useContext(MassegContext);

  const total = car.reduce((acc, item) => acc + item.price * item.itemNum, 0);
  const send = total > 1000 ? 50 : 0;
  const tax = total * 0.15;

  const num = car.length > 0 ? car.length : 0;

  const carMap = car.map((c) => (
    <div
      className="carCard"
      key={c.id}
      style={{
        background: "white",
        width: "100%",
        height: "120px",
        borderBottom: "1px solid #ccc",
        display: "flex",
        overflowY: "auto",
        fontFamily: "ditals",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px",
      }}
    >
      {/* صورة المنتج */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          width: "60%",
          height: "100%",
        }}
      >
        <img src={c.img} alt={c.name} width="100px" />
        <span>{c.name}</span>
        <p>{c.description}</p>
      </div>
      {/* صورة المنتج closs */}
      {/* عدد الوحدات */}
      <div style={{ width: "40%", height: "100%" }}>
        <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "50%",
              height: "70%",
              background: "white",
              borderRadius: "20px",
              border: "1px solid #ccc",
              display: "flex",
              fontSize: "15px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              style={{ color: "gray", fontFamily: "ditals" }}
              onClick={() =>
                setCar((prevCar) =>
                  prevCar.map((car) =>
                    car.id === c.id
                      ? { ...car, itemNum: car.itemNum - 1 }
                      : car,
                  ),
                )
              }
              disabled={c.itemNum === 1}
            >
              -
            </Button>
            <h3
              style={{ fontFamily: "ditals", color: "#1F1F1F", margin: "auto" }}
            >
              {c.itemNum}
            </h3>
            <Button
              style={{ color: "gray", fontFamily: "ditals" }}
              onClick={() =>
                setCar((prevCar) =>
                  prevCar.map((car) =>
                    car.id === c.id
                      ? { ...car, itemNum: car.itemNum + 1 }
                      : car,
                  ),
                )
              }
            >
              +
            </Button>
          </div>
          <Button
            onClick={() => deletOne(c.id)}
            style={{
              color: "gray",
              background: "white",
              height: "45px",
              borderRadius: "20px",
              border: "1px solid #ccc",
              boxShadow: "none",
            }}
            variant="contained"
          >
            <DeleteIcon />
          </Button>
        </div>

        <div
          style={{
            width: "100%",
            height: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>{(c.price * c.itemNum).toLocaleString()} ج.م</h3>
        </div>
      </div>
    </div>
  ));

  function deletOne(id) {
    setCar((prevCar) => prevCar.filter((car) => car.id !== id));
    setMass("تم حذف المنتج من العربة");
    setTimeout(() => {
      setMass("");
    }, 2000);
  }

  function donePay() {
    setMass("تم تأكيد الطلب");
    setTimeout(() => {
      setMass("");
    }, 2000);
    setCar([]);
  }

  return (
    <div
      style={{
        width: "100%",
        height: "500px",
        padding: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      {/* orders */}
      <div
        style={{
          background: "white",
          width: "60%",
          height: "100%",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "50px",
            borderBottom: "1px solid #ccc",
            color: "gray",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></div>
        <div style={{ width: "100%", height: "100%", overflowY: "auto" }}>
          {carMap}
        </div>
      </div>

      {/* orders closs */}
      {/* pay */}
      <div
        className="pay"
        style={{
          background: "white",
          width: "30%",
          height: "100%",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "50px",
            borderBottom: "1px solid #ccc",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>ملخص الطلب</h3>
        </div>
        <div
          style={{
            width: "100%",
            height: "200px",
            borderBottom: "1px solid #ccc",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "gray" }}>اجمالي المنتجات {car.length}</span>
            <h3>{total.toLocaleString()}</h3>
          </div>

          <div
            style={{
              width: "100%",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "gray" }}>الشحن</span>
            <h3>{send.toLocaleString()}</h3>
          </div>

          <div
            style={{
              width: "100%",
              height: "50px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ color: "gray" }}>الضريبة - 15%</span>
            <h3>{tax.toLocaleString()}</h3>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "70px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <span style={{ color: "gray" }}>الإجمالي</span>
          <h3>{(total + send + tax).toLocaleString()} ج.م</h3>
        </div>

        <div
          style={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
            gap: "10px",
          }}
        >
          <Button
            style={{
              color: "white",
              width: "100%",
              height: "45px",
              borderRadius: "10px",
              fontFamily: "ditals",
              background: "#00897b",
            }}
            variant="contained"
            onClick={() => donePay()}
          >
            <h3 className="pay">تأكيد الطلب</h3>
          </Button>

          <Button
            style={{
              width: "100%",
              height: "45px",
              borderRadius: "10px",
              fontFamily: "ditals",
              border: "1px solid #ccc",
              color: "#00897b",
            }}
            LinkComponent={Link}
            to="/"
          >
            <h3 className="pay">متابعه التسوق</h3>
          </Button>
        </div>
      </div>

      {/* pay closs */}
    </div>
  );
}
