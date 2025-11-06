import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Usuarios.css";

function EditarUsuarios() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({
    nome: "Renan",
    email: "renan@email.com",
    senha: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Usuário ${id} atualizado (simulado)!`);
    navigate("/usuarios");
  };

  return (
    <div className="usuarios-page">
      <h2>Editar Usuário</h2>

      <form className="form-usuario" onSubmit={handleSubmit}>
        <label>Nome:</label>
        <input
          value={usuario.nome}
          onChange={(e) => setUsuario({ ...usuario, nome: e.target.value })}
        />

        <label>Email:</label>
        <input
          type="email"
          value={usuario.email}
          onChange={(e) => setUsuario({ ...usuario, email: e.target.value })}
        />

        <label>Senha:</label>
        <input
          type="password"
          value={usuario.senha}
          onChange={(e) => setUsuario({ ...usuario, senha: e.target.value })}
        />

        <button type="submit" className="btn-salvar">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default EditarUsuarios;