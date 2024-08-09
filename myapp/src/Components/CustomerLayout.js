import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../Components/UserLayout.css";

const CustomerLayout = () => {
  return (
    <Box
      className="User-layout-box"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="ID" variant="outlined" />
      <TextField id="outlined-basic" label="NAME" variant="outlined" />
      <TextField id="outlined-basic" label="EMAIL" variant="outlined" />
      <TextField id="outlined-basic" label="PHONE NUMBER" variant="outlined" />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
      <Stack direction="row" spacing={3}>
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

export default CustomerLayout;
