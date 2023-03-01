import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header/Header";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./context/CartContext";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";


function App() {

  return (
    // <div className="App">
    //   <Header />
    //   <ItemListContainer  />
    //   <ItemDetailContainer />
    // </div>

    <BrowserRouter>
    <CartContextProvider>

      <Header />

      <Routes>

        <Route path="/" element={ <ItemListContainer  /> } />

        <Route path="/category/:categoryName" element={ <ItemListContainer  /> } />

        <Route path="/itemDetail/:id" element={ <ItemDetailContainer /> } />

        <Route path="/cart" element={ <Cart /> } />
        <Route path="/login" element={ <Login />} />
        <Route path="/sign-up" element={ <Register /> } />

        <Route path="*" element={ <h1>404 Not Found</h1> } />
        

      </Routes>
    </CartContextProvider>

    </BrowserRouter>

  );
}

export default App;
