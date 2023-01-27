import React from 'react'

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, Typography } from "@mui/material";

const CardMui = ( { title, description, imagen } ) => {
  return (
    <Card sx={{ maxWidth: 345, marginBottom: "20px" }}>
        <CardMedia
          sx={{ height: 240, objectFit: "cover" }}
          image={imagen}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Cancelar</Button>
          <Button size="small">Aceptar</Button>
        </CardActions>
      </Card>
  )
}

export default CardMui