import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/Products/ProductList";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import AddProduct from "./components/AddProduct/addProduct";
import UpdateProduct from "./components/UpdateProduct/updateProduct"
import ProductDetail from "./components/ProductDetail/productDetail";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Toaster toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<ProductList />} />
        <Route path="/addProduct" element={<AddProduct />}/>
        <Route path="/updateProduct" element={<UpdateProduct/>}/>
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
