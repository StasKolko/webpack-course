import { useState } from "react";
import classes from "./App.module.scss";
import { Link, Outlet } from "react-router-dom";
import panda from "@/assets/panda.jpg";
import panda2 from "@/assets/panda.png";
import JPEG from "@/assets/JPEG_example_down.jpg";
import Pen from "@/assets/pen.svg";

export const App = () => {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  // if (__PLATFORM__ === "desktop") {
  //   return <h1>Это desktop</h1>;
  // }

  // if (__PLATFORM__ === "mobile") {
  //   return <h1>Это mobile</h1>;
  // }

  return (
    <div data-testid={"App"}>
      <Link to={"/about"}>About</Link>
      <br />
      <Link to={"/shop"}>Shop</Link>
      <h1 data-testid={"title"}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img src={panda} alt="" width={100} height={100} />
        <img src={panda2} alt="" width={100} height={100} />
        <img src={JPEG} alt="" width={100} height={100} />
      </div>
      <div>
        <Pen width={50} height={50} color={"red"} />
      </div>

      <h1 className={classes.value}>{count}</h1>

      <button className={classes.button} onClick={increment}>
        inc
      </button>
      <Outlet />
    </div>
  );
};
