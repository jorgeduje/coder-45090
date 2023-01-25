
// EXPORTACION NOMBRADA, SE IMPORTA ENTRE {} Y CON EL MISMO NOMBRE
// export const obj = {

import ListNavbar from "../ListNavbar/ListNavbar"

// }
// export const obj2 = {

// }


export const Navbar = ()=>{

    return (
        <ul>
           <ListNavbar title="Productos" />
           <ListNavbar title="Servicios" />
           <ListNavbar title="Quienes somos" />
        </ul>
    )

}



