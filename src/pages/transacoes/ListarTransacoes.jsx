import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Transacoes.css";

function ListarTransacoes() {
  const navigate = useNavigate();

  const [transacoes, setTransacoes] = useState([
    { id: 1, descricao: "Depósito PIX", tipo: "ENTRADA", valor: 500.0, data: "2025-11-02" },
    { id: 2, descricao: "Delivery", tipo: "SAÍDA", valor: 75.9, data: "2025-11-03" },
    { id: 3, descricao: "Combustível", tipo: "SAÍDA", valor: 60.0, data: "2025-11-04" },
  ]);

  const excluirTransacao = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta transação?")) {
      setTransacoes(transacoes.filter((t) => t.id !== id));
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