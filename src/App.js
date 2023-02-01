import Header from "./components/Header/Header";
import ItemCount from "./components/ItemCount/ItemCount";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";
import LoginContainer from "./components/LoginContainer/LoginContainer";
import UseEffect from "./components/UseEffect/UseEffect";

function App() {
  let nombreUsuario = "Juancito";

  const onAdd = ( cantidad )=>{
    console.log(`se agregaron al carrito ${cantidad} unidades`)
  }

  return (
    <div className="App">
      <Layout>
        <Header />
        <LoginContainer />
        <ItemListContainer usuario={nombreUsuario} apellido="Lopez" edad={22} />
        <ItemCount stock={10} initial={2} onAdd={onAdd}  />
        <UseEffect />
      </Layout>
    </div>
  );
}

export default App;

// ItemListContainer( )
