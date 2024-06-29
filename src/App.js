import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Mainnav from "./components/Mainnav";
import Navbar from "./components/Navbar";
import Second from "./components/Second";
import SignUpform from "./components/SignUpform";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Light from "./components/Light";

function App() {
  // const [lightMode, setLightMode] = useState(false);

  // useEffect(() => {
  //   let savdeMode = localStorage.getItem("displayMode");
  //   if (!savedMode) {
  //     const newMode = "dark";
  //     setLightMode(false);
  //     localStorage.setItem("displayMode", savedMode);
  //   }
  //   setLightMode(savedMode === "light" ? true : false);
  // }, []);

  return (
    <div>
      {/* <Navbar /> */}
      {/* <Mainnav />
      <Hero /> */}
      <Light />
      {/* <Second /> */}
      {/* <Carousel /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUpform />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
