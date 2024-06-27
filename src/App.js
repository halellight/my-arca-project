import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Mainnav from "./components/Mainnav";
import Navbar from "./components/Navbar";
import Second from "./components/Second";
import SignUpform from "./components/SignUpform";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Mainnav />
      <Hero />
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
