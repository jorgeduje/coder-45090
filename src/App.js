import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";


function App() {

  return (
    // <div className="App">
    //   <Header />
    //   <ItemListContainer  />
    //   <ItemDetailContainer />
    // </div>

    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={ <ItemListContainer  /> } />

        <Route path="/category/:categoryName" element={ <ItemListContainer  /> } />

        <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />

        <Route path="/cart" element={ <Cart /> } />

        <Route path="*" element={ <h1>404 Not Found</h1> } />
        

      </Routes>

    </BrowserRouter>

  );
}

export default App;
