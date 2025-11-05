import "./Home.css";

function Home() {
  // back pra depois
  const usuario = "Renan";
  const saldoTotal = 3250.75;
  const ultimasTransacoes = [
    { id: 1, descricao: "Delivery iFood", tipo: "SAÍDA", valor: 75.9, data: "2025-11-03" },
    { id: 2, descricao: "Depósito PIX", tipo: "ENTRADA", valor: 500.0, data: "2025-11-02" },
    { id: 3, descricao: "Gasolina", tipo: "SAÍDA", valor: 60.0, data: "2025-11-01" },
  ];

  return (
    <div className="dashboard">
      <h2>Bem-vindo, {usuario}</h2>

      <div className="cards-container">
        <div className="card saldo">
          <h3>Saldo Total</h3>
          <p>R$ {saldoTotal.toFixed(2)}</p>
        </div>

        <div className="card entrada">
          <h3>Entradas</h3>
          <p>R$ 500,00</p>
        </div>

        <div className="card saida">
          <h3>Saídas</h3>
          <p>R$ 135,90</p>
        </div>
      </div>

      <div className="transacoes-container">
        <h3>Últimas Transações</h3>
        <table className="tabela-transacoes">
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {ultimasTransacoes.map((t) => (
              <tr key={t.id}>
                <td>{t.descricao}</td>
                <td className={t.tipo === "ENTRADA" ? "entrada" : "saida"}>{t.tipo}</td>
                <td>R$ {t.valor.toFixed(2)}</td>
                <td>{t.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;