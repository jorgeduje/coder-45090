
import "./Navbar.css"
import ListNavbar from "../ListNavbar/ListNavbar"

export const Navbar = ()=>{

    return (
        <ul className="categories">
           <ListNavbar title="Todas" />
           <ListNavbar title="Urbanas" />
           <ListNavbar title="Deportivas" />
        </ul>
    )

}



