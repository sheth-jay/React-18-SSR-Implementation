import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import "./App.css";

const styles = {
  main_header: {
    backgroundColor: "white",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
    boxShadow: "rgba(17, 17, 26, 0.1) 0px 2px 0px",
  },

  header: {
    padding: "0.6rem",
    width: "85rem",
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },

  navbar: {
    display: "flex",
    alignItem: "center",
    justifyContent: "center",
  },

  nav_link: {
    textDecoration: "none",
    color: "white",
    background: "rgb(239, 83, 102)",
    fontSize: "1.2rem",
    padding: "0.3rem 1.6rem",
    margin: "5px",
    border: "1px solid white",
    borderRadius: "0.3rem",
  },
};

const App = () => {
  return (
    <div>
      <div style={styles.main_header}>
        <div style={styles.header}>
          <div style={styles.navbar}>
            <Link to="/" style={styles.nav_link}>
              Home
            </Link>
            <Link to="/about" style={styles.nav_link}>
              About
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
};

export default App;
