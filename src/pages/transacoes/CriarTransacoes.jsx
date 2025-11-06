import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Transacoes.css";

function CriarTransacoes() {
  const navigate = useNavigate();
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("ENTRADA");
  const [valor, setValor] = useState("");
  const [data, setData] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!descricao || !valor || !data) {
      setErro("Preencha todos os campos");
      return;
    }

    console.log({ descricao, tipo, valor, data });
    alert("Transação criada (simulada)!");
    navigate("/transacoes");
  };

  return (
    <div className="transacoes-page">
      <h2>Nova Transação</h2>

      <form className="form-transacao" onSubmit={handleSubmit}>
        <label>Descrição:</label>
        <input value={descricao} onChange={(e) => setDescricao(e.target.value)} />

        <label>Tipo:</label>
        <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <option value="ENTRADA">Entrada</option>
          <option value="SAÍDA">Saída</option>
        </select>

        <label>Valor (R$):</label>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          step="0.01"
        />

        <label>Data:</label>
        <input type="date" value={data} onChange={(e) => setData(e.target.value)} />

        {erro && <p className="erro">{erro}</p>}

        <button type="submit" className="btn-salvar">Salvar</button>
      </form>
    </div>
  );
}

export default CriarTransacoes;