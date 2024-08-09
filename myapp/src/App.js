import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Customer from "./routes/Customer";
import User from "./routes/User";
import Order from "./routes/Order";
import Product from "./routes/Product";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/order" element={<Order />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
}

export default App;
