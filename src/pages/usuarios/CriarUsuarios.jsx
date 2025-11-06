import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Usuarios.css";

function CriarUsuarios() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      setErro("Preencha todos os campos");
      return;
    }

    console.log({ nome, email, senha });
    alert("Usuário criado (simulado)!");
    navigate("/usuarios");
  };

  return (
    <div className="usuarios-page">
      <h2>Novo Usuário</h2>

      <form className="form-usuario" onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input value={nome} onChange={(e) => setNome(e.target.value)} />

        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label>Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />

        {erro && <p className="erro">{erro}</p>}

        <button type="submit" className="btn-salvar">Salvar</button>
      </form>
    </div>
  );
}

export default CriarUsuarios;