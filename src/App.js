import { useState } from "react";
import "./App.css";
import Pray from "./components/Pray";

const DUMMY__INFO = [
  {
    id: "p_0",
    title: "صبح",
    bound: "2",
  },
  {
    id: "p_1",
    title: "ظهر",
    bound: "4",
  },
  {
    id: "p_2",
    title: "عصر",
    bound: "4",
  },
  {
    id: "p_3",
    title: "مغرب",
    bound: "3",
  },
  {
    id: "p_4",
    title: "عشاء",
    bound: "4",
  },
];

function App() {
  const [info, setInfo] = useState("آغاز");
  const liftUpInfoHandler = (info) => {
    if (
      (info?.id === "p_0" && info?.rakat >= 2) ||
      (info?.id === "p_1" && info?.rakat >= 4) ||
      (info?.id === "p_2" && info?.rakat >= 4) ||
      (info?.id === "p_3" && info?.rakat >= 3) ||
      (info?.id === "p_4" && info?.rakat >= 4)
    ) {
      setInfo(`اتمام ${info?.namaz}`);
      return;
    }
    setInfo(`${info?.namaz}: ${info?.rakat}`);
  };

  return (
    <div className="container">
      <h1>{info}</h1>
      {DUMMY__INFO.map((el) => (
        <Pray key={el.id} data={el} onGetInfo={liftUpInfoHandler} />
      ))}
    </div>
  );
}

export default App;
