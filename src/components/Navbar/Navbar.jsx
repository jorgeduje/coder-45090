import "./Navbar.css";
import ListNavbar from "../ListNavbar/ListNavbar";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul className="categories">
        
      <Link to="/">
        <ListNavbar title="Todas" />
      </Link>

      <Link to="/category/urbanas">
        <ListNavbar title="Urbanas" />
      </Link>

      <Link to="/category/deportivas">
        <ListNavbar title="Deportivas" />
      </Link>

    </ul>
  );
};
