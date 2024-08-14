import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../Components/Layout.css";
import axios from "axios";

const UserLayout = () => {
  const [formData, setFormData] = useState({
    id: "",
    userName: "",
    password: "",
    roles: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch user data from the API when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get("https://api.example.com/users");
        // Assuming the API returns a single user object
        const user = response.data;
        setFormData({
          id: user.id || "",
          userName: user.userName || "",
          password: user.password || "",
          roles: user.roles || "",
        });
      } catch (err) {
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle form submission to save data
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      await axios.post("https://api.example.com/users", formData);
      alert("Data saved successfully!");
    } catch (err) {
      setError("Failed to save data");
    } finally {
      setLoading(false);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <Box
      className="layout-box"
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <TextField
        id="id"
        label="ID"
        variant="outlined"
        value={formData.id}
        onChange={handleChange}
      />
      <TextField
        id="userName"
        label="USER NAME"
        variant="outlined"
        value={formData.userName}
        onChange={handleChange}
      />
      <TextField
        id="password"
        label="PASSWORD"
        variant="outlined"
        value={formData.password}
        onChange={handleChange}
      />
      <TextField
        id="roles"
        label="ROLES"
        variant="outlined"
        value={formData.roles}
        onChange={handleChange}
      />
      <Stack direction="row" spacing={3} className="btnUserLayout">
        <Button type="submit" variant="contained" color="info">
          Save
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

export default UserLayout;
