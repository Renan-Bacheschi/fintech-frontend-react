import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Transacoes.css";

function EditarTransacoes() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [transacao, setTransacao] = useState({
    descricao: "Compra no mercado",
    tipo: "SAÍDA",
    valor: 120.5,
    data: "2025-11-02",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Transação ${id} atualizada (simulada)!`);
    navigate("/transacoes");
  };

  return (
    <div className="transacoes-page">
      <h2>Editar Transação</h2>

      <form className="form-transacao" onSubmit={handleSubmit}>
        <label>Descrição:</label>
        <input
          value={transacao.descricao}
          onChange={(e) => setTransacao({ ...transacao, descricao: e.target.value })}
        />

        <label>Tipo:</label>
        <select
          value={transacao.tipo}
          onChange={(e) => setTransacao({ ...transacao, tipo: e.target.value })}
        >
          <option value="ENTRADA">Entrada</option>
          <option value="SAÍDA">Saída</option>
        </select>

        <label>Valor (R$):</label>
        <input
          type="number"
          value={transacao.valor}
          onChange={(e) => setTransacao({ ...transacao, valor: e.target.value })}
          step="0.01"
        />

        <label>Data:</label>
        <input
          type="date"
          value={transacao.data}
          onChange={(e) => setTransacao({ ...transacao, data: e.target.value })}
        />

        <button type="submit" className="btn-salvar">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default EditarTransacoes;