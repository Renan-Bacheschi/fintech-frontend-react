import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contas.css";

function ListarContas() {
  const navigate = useNavigate();

  const [contas, setContas] = useState([
    { id: 1, banco: "Nubank", agencia: "0001", numero: "12345-6", saldo: 3250.75 },
    { id: 2, banco: "Itaú", agencia: "0123", numero: "98765-4", saldo: 850.2 },
  ]);

  const excluirConta = (id) => {
    if (window.confirm("Tem certeza que deseja excluir esta conta?")) {
      setContas(contas.filter((c) => c.id !== id));
    }
  };

  return (
    <div className="contas-page">
      <div className="topo">
        <h2>Contas</h2>
        <button className="btn-criar" onClick={() => navigate("/contas/nova")}>
          + Nova Conta
        </button>
      </div>

      <table className="tabela-contas">
        <thead>
          <tr>
            <th>Banco</th>
            <th>Agência</th>
            <th>Número</th>
            <th>Saldo (R$)</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {contas.map((c) => (
            <tr key={c.id}>
              <td>{c.banco}</td>
              <td>{c.agencia}</td>
              <td>{c.numero}</td>
              <td>R$ {c.saldo.toFixed(2)}</td>
              <td>
                <button className="btn-editar" onClick={() => navigate(`/contas/${c.id}/editar`)}>Editar</button>
                <button className="btn-excluir" onClick={() => excluirConta(c.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListarContas;