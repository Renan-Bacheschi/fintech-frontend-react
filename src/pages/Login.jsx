import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // validação simples
    if (!email || !senha) {
      setErro("Preencha todos os campos");
      return;
    }

    // simulação de login ()
    if (email === "teste@fintech.com" && senha === "123456") {
      const usuario = { nome: "Renan", email };
      localStorage.setItem("usuario", JSON.stringify(usuario));
      navigate("/");
    } else {
      setErro("Email ou senha inválidos");
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Entrar na Fintech</h2>

        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Senha:</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />

          {erro && <p className="erro">{erro}</p>}

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;