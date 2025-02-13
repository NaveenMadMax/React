import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductList from "./components/Products/ProductList";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
