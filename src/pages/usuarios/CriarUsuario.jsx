import React, { useState } from 'react';
import FormField from '../../components/FormField';
import api from '../../../fintech-frontend-react/src/api/client';

const CriarUsuario = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/usuarios', formData);
      // Add success handling
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <div>
      <h1>Criar Usuário</h1>
      <form onSubmit={handleSubmit}>
        <FormField
          label="Nome"
          name="nome"
          value={formData.nome}
          onChange={(e) => setFormData({...formData, nome: e.target.value})}
        />
        <FormField
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
        <FormField
          label="Senha"
          type="password"
          name="senha"
          value={formData.senha}
          onChange={(e) => setFormData({...formData, senha: e.target.value})}
        />
        <button type="submit">Criar</button>
      </form>
    </div>
  );
};

export default CriarUsuario;