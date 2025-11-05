import React, { useState } from 'react';
import FormField from '../../components/FormField';
import api from '../../../fintech-frontend-react/src/api/client';

const CriarConta = () => {
  const [formData, setFormData] = useState({
    nome: '',
    tipo: '',
    saldo_inicial: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/contas', formData);
      // Add success handling
    } catch (error) {
      console.error('Erro ao criar conta:', error);
    }
  };

  return (
    <div>
      <h1>Criar Conta</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          name="nome"
          value={formData.nome}
          onChange={(e) => setFormData({...formData, nome: e.target.value})}
        />
        <FormField
          label="Tipo"
          name="tipo"
          value={formData.tipo}
          onChange={(e) => setFormData({...formData, tipo: e.target.value})}
        />
        <FormField
          label="Saldo Inicial"
          type="number"
          name="saldo_inicial"
          value={formData.saldo_inicial}
          onChange={(e) => setFormData({...formData, saldo_inicial: Number(e.target.value)})}
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default CriarConta;