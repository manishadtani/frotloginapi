import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("pthgtm611919@gmail.com");
  const [password, setPassword] = useState("1234@Abcd");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setMessage("Logging in...");

    try {

        const API_URL =
  import.meta.env.MODE === "development"
    ? "/api/auth/login/"
    : "https://frotloginapi.onrender.com/api/auth/login";




      const res = await axios.post(API_URL, {
        email,
        password,
      });
      console.log(res.data);

      setMessage("Login successful!");
      console.log("Token:", res.data.refresh);
      // Optionally store it
      localStorage.setItem("token", res.data.refresh);
    } catch (error) {
      if (error.response?.status === 401) {
        setMessage("Invalid email or password");
      } else {
        setMessage("Something went wrong. Try again.");
      }
      console.error("Login error:", error);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.form}>
        <h2>Login</h2>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="Email"
          style={styles.input}
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f2f5",
  },
  form: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "300px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.75rem",
    fontSize: "1rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "0.75rem",
    fontSize: "1rem",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

export default Login;
