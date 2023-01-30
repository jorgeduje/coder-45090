
import { useState } from "react"

const ItemCount = ({stock, initial, onAdd}) => {

    // let contador = estado[0]
    // let funcionContador = estado[1]
    // useState

    console.log( "hola" )

    const [ contador, setContador ] = useState( initial ) // [ estado, funcion ]
    const [ mostrar, setMostrar ] = useState(false) // flag

    const sumar = ()=>{
        if( contador < stock ){

            setContador( contador + 1 )
        }

    }

    const restar = ()=>{
        
        setContador( contador - 1 )

    }

    const cambiarEstado = ()=>{

        setMostrar( !mostrar )

    }

    console.log(mostrar)



  return (
    <div>
        {/* <h1 style={{
            color: `${mostrar ? "red" : "blue"}`
        }}>El contador esta en {contador} </h1> */}
        <h1 className={ mostrar ? "title-true" : "title-false" }>El contador esta en {contador}</h1>

        <button onClick={sumar}>Sumar</button>
        <button onClick={restar}>Restar</button>
        <button onClick={cambiarEstado} disabled={ stock === 0 ? true : false}>
            {mostrar ? "Ocultar" : "Mostrar" }
        </button>
        {
            mostrar === true ? <h2>Aca se muestra el texto</h2> : null
        }
        <button onClick={  ()=>onAdd(contador) } >Agregar Al carrito</button>
    </div>
  )
}

export default ItemCount