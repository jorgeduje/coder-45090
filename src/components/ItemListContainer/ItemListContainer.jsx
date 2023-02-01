
import imagen1 from "../../images/logoReact.jpg"

const ItemListContainer = ({ edad, apellido, usuario }) => {
  // const { edad, apellido, usuario } = props

  // FRAGMENTS
  return (
    <>
      <h2>
        Hola {usuario} {apellido}{" "}
      </h2>
      <h3>Tenes {edad} años!</h3>
      <img
        src="https://res.cloudinary.com/dnqfh2chg/image/upload/v1675084633/images_jo0ms4.jpg"
        alt=""
      />

      {/* <img src={imagen1} alt="" /> */}
      {/* <img src="images/logoReact.jpg" alt="" /> */}

    </>
  );
};

export default ItemListContainer;

// const algo = ()=>{

//   let nombre = "Jorge"
//   let apellido = "Duje"

//   return nombre , apellido
// }
