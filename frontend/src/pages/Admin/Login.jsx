import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // login fake só para teste
    if (email === "admin@teste.com" && password === "1234") {
      localStorage.setItem("adminLoggedIn", "true");
      alert("Login OK (fake)");
      navigate("/");
    } else {
      alert("Credenciais inválidas");
    }
  };

  return (
    <div style={{ padding: "3rem", maxWidth: "400px", margin: "auto" }}>
      <h1>Área Administrativa</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button style={{ width: "100%", padding: "10px" }}>
          Entrar
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
