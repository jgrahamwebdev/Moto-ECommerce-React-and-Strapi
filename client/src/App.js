
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Checkout from "./scenes/checkout/Checkout";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Navbar from "./scenes/global/Navbar";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";
import RidingGear from "./components/RidingGear";
import Accessories from "./components/Accessories";
import Parts from "./components/Parts";
import CategoryMenu from "./scenes/global/CategoryMenu";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="item/:itemId" element={<ItemDetails />}/>
          <Route path="checkout" element={<Checkout />}/>
          <Route path="riding-gear" element={<RidingGear />}/>
          <Route path="accessories" element={<Accessories />}/>
          <Route path="parts" element={<Parts />}/>
        </Routes>
        <CartMenu />
        <CategoryMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;




