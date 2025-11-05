import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../../fintech-frontend-react/src/api/client';

const ListarContas = () => {
  const [contas, setContas] = useState([]);

  useEffect(() => {
    const fetchContas = async () => {
      try {
        const response = await api.get('/contas');
        setContas(response.data);
      } catch (error) {
        console.error('Erro ao buscar contas:', error);
      }
    };

    fetchContas();
  }, []);

  const headers = ['ID', 'Nome', 'Saldo', 'Tipo', 'Ações'];

  return (
    <div>
      <h1>Contas</h1>
      <Table headers={headers} data={contas} />
    </div>
  );
};

export default ListarContas;