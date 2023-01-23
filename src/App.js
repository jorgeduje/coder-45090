
import Navbar from "./components/Navbar/Navbar.jsx"


function App() {

  const apellido = "Duje"

  const sumar = ()=>{
    console.log( `Hola jorge ${apellido}`)
  }


  return (
    <div className="App">
        <Navbar title="Hola" sadsa/>
        <Navbar title="chau" />
        <Navbar title="estas" />
        <Navbar title="casa" />
        <Navbar title="22" />
        <Navbar title="54" />
        <Navbar title="11" />
    </div>
  );
}

export default App;

// <Navbar uno=1 dos=2 /> === Navbar( 1, 2, 3)

