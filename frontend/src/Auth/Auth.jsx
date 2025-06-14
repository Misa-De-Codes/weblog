import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation (optional)

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login/Signup
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in:", { email: formData.email, password: formData.password });
      // navigate("/dashboard"); // Redirect after login
    } else {
      console.log("Signing up:", formData);
      // navigate("/welcome"); // Redirect after signup
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        {/* Toggle Switch */}
        <div style={styles.toggleContainer}>
          <button
            style={{
              ...styles.toggleBtn,
              ...(isLogin ? styles.activeToggle : {}),
            }}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            style={{
              ...styles.toggleBtn,
              ...(!isLogin ? styles.activeToggle : {}),
            }}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form}>
          {!isLogin && (
            <div style={styles.inputGroup}>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                style={styles.input}
                placeholder="Your name"
                required
              />
            </div>
          )}

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              placeholder="your@email.com"
              required
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                style={styles.input}
                placeholder="••••••••"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={styles.showPasswordBtn}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <button type="submit" style={styles.submitBtn}>
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Forgot Password / Social Login */}
{  /* 
       <div style={styles.extraOptions}>
          {isLogin && (
            <a href="/forgot-password" style={styles.link}>
              Forgot Password?
            </a>
          )}
          <div style={styles.socialLogin}>
            <p style={styles.orText}>or continue with</p>
            <div style={styles.socialIcons}>
              <button style={styles.socialBtn}>Google</button>
              <button style={styles.socialBtn}>Facebook</button>
            </div>
          </div>
        </div>
*/        
}
      </div>
    </div>
  );
};

// Stylish CSS-in-JS
const styles = {
  container: {
    background: "linear-gradient(135deg, #1a1a2e, #16213e)",
    color: "#fff",
    fontFamily: "'Arial', sans-serif",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  formWrapper: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: "15px",
    padding: "30px",
    width: "100%",
    maxWidth: "400px",
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  toggleContainer: {
    display: "flex",
    marginBottom: "20px",
    background: "rgba(255, 255, 255, 0.1)",
    borderRadius: "10px",
    overflow: "hidden",
  },
  toggleBtn: {
    flex: 1,
    padding: "12px",
    border: "none",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "all 0.3s ease",
  },
  activeToggle: {
    background: "rgba(255, 20, 147, 0.7)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  label: {
    fontSize: "14px",
    color: "rgba(255, 255, 255, 0.8)",
  },
  input: {
    padding: "12px 15px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    fontSize: "16px",
    transition: "all 0.3s ease",
    outline: "none",
  },
  passwordContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
  },
  showPasswordBtn: {
    position: "absolute",
    right: "10px",
    background: "transparent",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontSize: "16px",
  },
  submitBtn: {
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "linear-gradient(45deg, #ff1493, #ff6b6b)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginTop: "10px",
  },
  extraOptions: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    alignItems: "center",
  },
  link: {
    color: "#ff1493",
    textDecoration: "none",
    fontSize: "14px",
  },
  socialLogin: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "100%",
  },
  orText: {
    textAlign: "center",
    color: "rgba(255, 255, 255, 0.6)",
    fontSize: "14px",
  },
  socialIcons: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
  },
  socialBtn: {
    padding: "10px 15px",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(255, 255, 255, 0.1)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
    transition: "all 0.3s ease",
  },
};

export default Auth;