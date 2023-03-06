import "./Navbar.css";
import ListNavbar from "../ListNavbar/ListNavbar";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul className="categories">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "active-navbar" : "navbar-item"
        }
      >
        <ListNavbar title="Todas" />
      </NavLink>

      <NavLink
        to="/category/urbanas"
        className={({ isActive }) =>
          isActive ? "active-navbar" : "navbar-item"
        }
      >
        <ListNavbar title="Urbanas" />
      </NavLink>

      <NavLink
        to="/category/deportivas"
        className={({ isActive }) =>
          isActive ? "active-navbar" : "navbar-item"
        }
      >
        <ListNavbar title="Deportivas" />
      </NavLink>
    </ul>
  );
};
