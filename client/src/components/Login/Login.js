import React, { useState } from "react";
import "../Create/create.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin" && password === "admin123") {
      navigate("/create");
      setEmail("");
      setPassword("");
    } else {
      return;
    }
  };

  return (
    <div className="all-container">
      <div className="create-container">
        <h1 className="create-header">Log IN to create your pizza</h1>
        <form className="pizza-form" onSubmit={(e) => handleSubmit(e)}>
          <h3>For demonstration purpose , login as an admin with the hint</h3>
          <input
            type="text"
            placeholder="admin"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="hint">hint: admin</p>
          <input
            type="password"
            placeholder="admin123"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="hint">hint: admin123</p>

          <button className="create">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
