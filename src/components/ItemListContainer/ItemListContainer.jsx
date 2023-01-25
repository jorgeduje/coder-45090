

const ItemListContainer = (  {edad, apellido, usuario}  ) => {

  // const { edad, apellido, usuario } = props

  // FRAGMENTS
  return (
    <>
        <h2>Hola {usuario} {apellido} </h2>
        <h3>Tenes {edad} años!</h3>
    </>
    
  )
}

export default ItemListContainer

// const algo = ()=>{

//   let nombre = "Jorge"
//   let apellido = "Duje"

//   return nombre , apellido
// }