import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../Components/Layout.css";

const OrderLayout = () => {
  return (
    <div className="order-container">
      <Box
        className="layout-box"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="ORDER ID" variant="outlined" />
        <TextField id="outlined-basic" label="CUSTOMER ID" variant="outlined" />
        <TextField id="outlined-basic" label="PRODUCT ID" variant="outlined" />
        <TextField id="outlined-basic" label="QUANTITY" variant="outlined" />
        <TextField id="outlined-basic" label="ORDER DATE" variant="outlined" />
        {/* <TextField id="filled-basic" label="Filled" variant="filled" />
    <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        <Stack direction="row" spacing={3} className="btnOrderLayout">
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
    </div>
  );
};

export default OrderLayout;
