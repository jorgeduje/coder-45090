import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";
import LoginContainer from "./components/LoginContainer/LoginContainer";

function App() {
  let nombreUsuario = "Juancito";

  return (
    <div className="App">
      <Layout>
        <Header />
        <LoginContainer />
        <ItemListContainer usuario={nombreUsuario} apellido="Lopez" edad={22} />
        {/* <ItemListContainer usuario={nombreUsuario} apellido="Lopez" edad={22} /> */}
      </Layout>
    </div>
  );
}

export default App;

// ItemListContainer( )
