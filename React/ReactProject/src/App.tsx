import './App.css';
import Navbar from './Components/Navbar/NavBar'
import Home from  './pages/Home'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import FillForm from './pages/FillForm'
import {Routes, Route} from 'react-router-dom'

const App= () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/fillform" element={<FillForm/>} />
      </Routes>
    </div>
  );
}
export default App;