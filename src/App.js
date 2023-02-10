import { BrowserRouter, Routes, Route } from "react-router-dom"

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


function App() {

  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={ <ItemListContainer  /> } />

      </Routes>

    </BrowserRouter>

  );
}

export default App;
