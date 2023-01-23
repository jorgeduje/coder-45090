
import "./Navbar.css"

const Navbar = (props)=>{

    return (
        <div className="containerNavbar">
            <h1 style={ {color:"blue"} }>{props.title}</h1>
        </div>
    )
}

export default Navbar

