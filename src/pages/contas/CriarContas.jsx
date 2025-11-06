import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Contas.css";

function CriarContas() {
  const navigate = useNavigate();
  const [banco, setBanco] = useState("");
  const [agencia, setAgencia] = useState("");
  const [numero, setNumero] = useState("");
  const [saldo, setSaldo] = useState("");
  const [erro, setErro] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!banco || !agencia || !numero || !saldo) {
      setErro("Preencha todos os campos");
      return;
    }

    console.log({ banco, agencia, numero, saldo });
    alert("Conta criada (simulada)!");
    navigate("/contas");
  };

  return (
    <div className="contas-page">
      <h2>Nova Conta</h2>

      <form className="form-conta" onSubmit={handleSubmit}>
        <label>Banco:</label>
        <input value={banco} onChange={(e) => setBanco(e.target.value)} />

        <label>Agência:</label>
        <input value={agencia} onChange={(e) => setAgencia(e.target.value)} />

        <label>Número:</label>
        <input value={numero} onChange={(e) => setNumero(e.target.value)} />

        <label>Saldo Inicial (R$):</label>
        <input
          type="number"
          value={saldo}
          onChange={(e) => setSaldo(e.target.value)}
          step="0.01"
        />

        {erro && <p className="erro">{erro}</p>}

        <button type="submit" className="btn-salvar">Salvar</button>
      </form>
    </div>
  );
}

export default CriarContas;