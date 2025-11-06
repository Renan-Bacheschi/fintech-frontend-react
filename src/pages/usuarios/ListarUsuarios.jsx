import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import "./Usuarios.css";

function ListarUsuarios() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    carregarUsuarios();
  }, []);

  const carregarUsuarios = async () => {
    try {
      const resposta = await api.get("/usuarios"); // busca no backend
      setUsuarios(resposta.data);
    } catch (erro) {
      console.error("Erro ao carregar usuários:", erro);
      alert("Erro ao carregar usuários. Verifique o backend.");
    }
  };

  const excluirUsuario = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir este usuário?")) {
      try {
        await api.delete(`/usuarios/${id}`);
        carregarUsuarios(); // recarrega após exclusão
      } catch (erro) {
        console.error("Erro ao excluir usuário:", erro);
      }
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
                <button
                  className="btn-editar"
                  onClick={() => navigate(`/usuarios/${u.id}/editar`)}
                >
                  Editar
                </button>
                <button
                  className="btn-excluir"
                  onClick={() => excluirUsuario(u.id)}
                >
                  Excluir
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarUsuarios;