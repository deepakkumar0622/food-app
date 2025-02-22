import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Login from "./components/Login/Login";

const App = () => {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (login) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto"; // Cleanup when component unmounts
    };
  }, [login]);
  return (
    <>
      {login ? <Login setLogin={setLogin} /> : <></>}
      <div className="App">
        <Navbar setLogin={setLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
