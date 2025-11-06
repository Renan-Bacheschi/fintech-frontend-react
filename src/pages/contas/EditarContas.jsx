import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Contas.css";

function EditarContas() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [conta, setConta] = useState({
    banco: "Itaú",
    agencia: "0123",
    numero: "98765-4",
    saldo: 850.2,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Conta ${id} atualizada (simulada)!`);
    navigate("/contas");
  };

  return (
    <div className="contas-page">
      <h2>Editar Conta</h2>

      <form className="form-conta" onSubmit={handleSubmit}>
        <label>Banco:</label>
        <input
          value={conta.banco}
          onChange={(e) => setConta({ ...conta, banco: e.target.value })}
        />

        <label>Agência:</label>
        <input
          value={conta.agencia}
          onChange={(e) => setConta({ ...conta, agencia: e.target.value })}
        />

        <label>Número:</label>
        <input
          value={conta.numero}
          onChange={(e) => setConta({ ...conta, numero: e.target.value })}
        />

        <label>Saldo (R$):</label>
        <input
          type="number"
          value={conta.saldo}
          onChange={(e) => setConta({ ...conta, saldo: e.target.value })}
          step="0.01"
        />

        <button type="submit" className="btn-salvar">Salvar Alterações</button>
      </form>
    </div>
  );
}

export default EditarContas;