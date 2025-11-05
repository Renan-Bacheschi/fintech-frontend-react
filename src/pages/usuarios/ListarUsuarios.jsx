import React, { useEffect, useState } from 'react';
import Table from '../../components/Table';
import api from '../../../fintech-frontend-react/src/api/client';

const ListarUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await api.get('/usuarios');
        setUsuarios(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      }
    };

    fetchUsuarios();
  }, []);

  const headers = ['ID', 'Nome', 'Email', 'Ações'];

  return (
    <div>
      <h1>Usuários</h1>
      <Table headers={headers} data={usuarios} />
    </div>
  );
};

export default ListarUsuarios;