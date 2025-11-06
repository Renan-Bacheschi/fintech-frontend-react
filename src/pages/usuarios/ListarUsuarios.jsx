import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Usuarios.css";

function ListarUsuarios() {
  const navigate = useNavigate();

  const [usuarios, setUsuarios] = useState([
    { id: 1, nome: "Renan", email: "renan@email.com" },
    { id: 2, nome: "Maria", email: "maria@email.com" },
    { id: 3, nome: "João", email: "joao@email.com" },
  ]);

  const excluirUsuario = (id) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      setUsuarios(usuarios.filter((u) => u.id !== id));
    }
  };

  return (
    <div className="usuarios-page">
      <div className="topo">
        <h2>Usuários</h2>
        <button className="btn-criar" onClick={() => navigate("/usuarios/novo")}>
          + Novo Usuário
        </button>
      </div>

      <table className="tabela-usuarios">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.nome}</td>
              <td>{u.email}</td>
              <td>
                <button className="btn-editar" onClick={() => navigate(`/usuarios/${u.id}/editar`)}>Editar</button>
                <button className="btn-excluir" onClick={() => excluirUsuario(u.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarUsuarios;