import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { register } from "../../firebaseConfig";

const Register = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await register({
      email: userData.email,
      password: userData.password,
    });

    console.log(res);
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <form action="" onSubmit={handleSubmit}>
        <TextField
          label="Ingresa tu email"
          variant="outlined"
          value={userData.email}
          name="email"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
        />
        <TextField
          label="Outlined"
          variant="outlined"
          value={userData.password}
          name="password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <Button variant="contained" type="submit">
          Ingresar
        </Button>
      </form>

      {/* <Button onClick={handleLoginGoggle}>Ingresa con Google</Button> */}
    </div>
  );
};

export default Register;
