import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Accessory from "pages/Accessory";
import Digital from "pages/Digital";
import Fashion from "pages/Fashion";
import Product from "pages/Product";
import Cart from "pages/Cart";
import NotFound from "pages/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/accessory" element={<Accessory />} />
      <Route path="/digital" element={<Digital />} />
      <Route path="/fashion" element={<Fashion />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
