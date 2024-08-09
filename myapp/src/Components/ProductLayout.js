import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../Components/Layout.css";

const ProductLayout = () => {
  return (
    <Box
      className="layout-box"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="ID" variant="outlined" />
      <TextField id="outlined-basic" label="NAME" variant="outlined" />
      <TextField id="outlined-basic" label="PRICE" variant="outlined" />
      <TextField id="outlined-basic" label="STOCK" variant="outlined" />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
  <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      <Stack direction="row" spacing={3} className="btnProductLayout">
        <Button variant="contained" color="info">
          Add
        </Button>
        <Button variant="contained" color="success">
          Update
        </Button>
        <Button variant="contained" color="warning">
          Delete
        </Button>
        <Button variant="outlined" color="error" size="large">
          Clear
        </Button>
      </Stack>
    </Box>
  );
};

export default ProductLayout;
