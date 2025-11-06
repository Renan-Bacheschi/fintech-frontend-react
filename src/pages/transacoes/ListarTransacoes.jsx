import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/api";
import "./Transacoes.css";

function ListarTransacoes() {
  const navigate = useNavigate();
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    carregarTransacoes();
  }, []);

  const carregarTransacoes = async () => {
    try {
      const resposta = await api.get("/transacoes");
      setTransacoes(resposta.data);
    } catch (erro) {
      console.error("Erro ao carregar transações:", erro);
    }
  };

  const excluirTransacao = async (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta transação?")) {
      await api.delete(`/transacoes/${id}`);
      carregarTransacoes();
    }
  };

  return (
    <div className="transacoes-page">
      <div className="topo">
        <h2>Transações</h2>
        <button className="btn-criar" onClick={() => navigate("/transacoes/nova")}>
          + Nova Transação
        </button>
      </div>

      <table className="tabela-transacoes">
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tipo</th>
            <th>Valor</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {transacoes.map((t) => (
            <tr key={t.id}>
              <td>{t.descricao}</td>
              <td className={t.tipo === "ENTRADA" ? "entrada" : "saida"}>{t.tipo}</td>
              <td>R$ {t.valor.toFixed(2)}</td>
              <td>{t.data}</td>
              <td>
                <button className="btn-editar" onClick={() => navigate(`/transacoes/${t.id}/editar`)}>Editar</button>
                <button className="btn-excluir" onClick={() => excluirTransacao(t.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarTransacoes;