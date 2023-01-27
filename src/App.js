import { Button, TextField, Typography } from "@mui/material";
import GridItems from "./components/GridItems/GridItems";
import Header from "./components/Header/Header";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Layout from "./components/Layout/Layout";
import LoginContainer from "./components/LoginContainer/LoginContainer";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardMui from "./components/CardMui/CardMui";

function App() {
  let nombreUsuario = "Juancito";
  let idioma = "ingles"
 

  return (
    <div className="App">
      {/* <GridItems /> */}
      <Typography variant="h2" color="secondary">
        Hola Mundo!
      </Typography>
      <TextField
        id="outlined-basic"
        label="Ingrese su nombre"
        variant="outlined"
        color="primary"
        fullWidth={true}
        size="medium"
      />

      <Button variant="outlined">{ idioma === "español" ? "Cancelar" : "Cancel"}</Button>
      <Button variant="contained">Aceptar</Button>

      <CircularProgress />
      <h2>....</h2>
      <CardMui
        title="Una cosa"
        description="descripcion 1"
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnPtvahlYpON5Zly_TtzIsWbqaTphGwmQ_Yw&usqp=CAU"
      />
      <CardMui
        title="Otra cosa"
        description="descripcion 2"
        imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMrqS4KyS_lYn8YAdNohszM5GXO5VEBKL-oA&usqp=CAU"
      />
    </div>
  );
}

export default App;

// ItemListContainer( )
