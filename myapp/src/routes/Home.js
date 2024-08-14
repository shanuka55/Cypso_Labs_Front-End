import React from "react";
import Navbar from "../Components/Navbar";

const Home = () => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "60vh",
      textAlign: "center",
    },
    heading: {
      color: "#ff5733", // Change this to your desired color
    },
    button: {
      backgroundColor: "#007bff", // Change this to your desired color
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      marginTop: "20px",
    },
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome ABC Company</h1>
        <h2>Management System</h2>
        <button style={styles.button}>Get Start</button>
      </div>
    </div>
  );
};

export default Home;
