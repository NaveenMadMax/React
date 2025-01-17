import { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const tasks = [
  { path: "/task1", label: "Button Click Task" },
  { path: "/task2", label: "Alert Button Task" },
  { path: "/task3", label: "Update The Input Value While Button Click" },
  { path: "/task4", label: "Delete Button and Reset Button Task" },
  { path: "/task5", label: "React useState with Form Creation of All Input Fields Showing Alert" },
  { path: "/task6", label: "Form Validation for Each Input" },
  { path: "/task7", label: "Created a Form Using Material UI" },
  { path: "/task8", label: "React Form Validation in Real-time" },
  { path: "/task9", label: "React Dropdown Types and AutoComplete Components" },
  { path: "/task10", label: "React Dropdown Types and AutoComplete Components and Validation" },
  { path: "/task14", label: "React Axiox get method" },
  { path: "/task15", label: "React Axiox get method for 10 users" }
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", padding: 1 }}>
        <IconButton onClick={toggleDrawer(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </Box>
      <List>
        {tasks.map((task, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemText>
                <Link to={task.path} style={{ textDecoration: "none", color: "#9000ff", fontFamily:"cursive" }}>{task.label}</Link>
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div className="navbar" style={{ display: "flex", alignItems: "center", padding: "0 16px" }}>
      {/* Drawer Menu Button */}
      <IconButton onClick={toggleDrawer(true)} sx={{ marginRight: 2 }}>
        <MenuIcon />
      </IconButton>
      {/* Navbar Logo */}
      <div className="logo">Router</div>
      {/* Navbar Links */}
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

      {/* Navbar Login Button */}
      <button>Login</button>

      {/* Drawer Component */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default NavBar;
