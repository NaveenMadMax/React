import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">Router</div>
      <ul>
        <Link to={"/home"}>
          <li>Home</li>
        </Link>
        <Link to={"/products"}>
        <li>Products</li>
        </Link>
        <Link to={"/aboutus"}>
        <li>AboutUs</li>
        </Link>
        <Link to={"/fillform"}>
        <li>FillForm</li>
        </Link>
      </ul>
      <button>Login</button>
    </div>
  );
};

export default NavBar;
