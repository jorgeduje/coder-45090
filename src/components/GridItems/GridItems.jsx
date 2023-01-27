import Grid from "@mui/material/Grid";

const GridItems = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} lg={3} sx={{
        border: "2px solid black",
        backgroundColor: { xs: "red", sm: "blue"}
      }}>
        Grid 1
      </Grid>
      <Grid item xs={12} sm={6} lg={3} sx={{
        border: "2px solid black"
      }}>
        Grid 2
      </Grid>
      <Grid item xs={12} sm={6} lg={3} sx={{
        border: "2px solid black"
      }}>
        Grid 3
      </Grid>
      <Grid item xs={12} sm={6} lg={3} sx={{
        border: "2px solid black"
      }}>
        Grid 4
      </Grid>
    </Grid>
  );
};

export default GridItems;
