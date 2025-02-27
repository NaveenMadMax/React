import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/Products/ProductList";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import AddProduct from "./components/AddProduct/addProduct";
import UpdateProduct from "./components/UpdateProduct/updateProduct"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<ProductList />} />
        <Route path="/addProduct" element={<AddProduct />}/>
        <Route path="/updateProduct" element={<UpdateProduct/>}/>
      </Routes>
    </Router>
  );
};

export default App;
