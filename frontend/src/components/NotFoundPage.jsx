import React from "react";
import { useNavigate } from "react-router-dom"; // For navigation (optional)

const NotFoundPage = () => {
  const navigate = useNavigate(); // For programmatic navigation

  return (
    <div style={styles.body}>
      <h1 style={styles.h1}>404</h1>
      <h2 style={styles.h2}>Lost in the Dark?</h2>
      <p style={styles.p}>
        This page doesn't exist... but maybe you'd like to explore something hotter?
      </p>
      <button
        onClick={() => navigate("/home")} // Or use a plain <a> tag if not using React Router
        style={styles.button}
      >
        Take Me Back to Safety
      </button>
    </div>
  );
};

// Stylish CSS-in-JS
const styles = {
  body: {
    background: "linear-gradient(135deg, #1a1a2e, #16213e)",
    color: "#fff",
    fontFamily: "'Arial', sans-serif",
    textAlign: "center",
    margin: 0,
    padding: 0,
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  h1: {
    fontSize: "5rem",
    margin: 0,
    textShadow: "0 0 10px rgba(255, 20, 147, 0.7)",
    animation: "pulse 2s infinite",
  },
  h2: {
    fontSize: "2rem",
    margin: "0.5rem 0",
    color: "#ff1493",
  },
  p: {
    fontSize: "1.2rem",
    maxWidth: "600px",
    margin: "1rem auto",
    opacity: 0.9,
  },
  button: {
    color: "#ff1493",
    textDecoration: "none",
    border: "1px solid #ff1493",
    padding: "10px 20px",
    borderRadius: "25px",
    marginTop: "20px",
    transition: "all 0.3s ease",
    background: "transparent",
    cursor: "pointer",
    fontSize: "1rem",
    outline: "none",
  },
  // Keyframes for the glow effect (add to global CSS or use a CSS-in-JS solution)
  "@keyframes pulse": {
    "0%": { opacity: 0.7 },
    "50%": { opacity: 1, textShadow: "0 0 15px rgba(255, 20, 147, 0.9)" },
    "100%": { opacity: 0.7 },
  },
};

export default NotFoundPage;