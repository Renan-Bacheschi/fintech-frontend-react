import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormField from '../../components/FormField';
import api from '../../../fintech-frontend-react/src/api/client';

const EditarUsuario = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nome: '',
    email: ''
  });

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await api.get(`/usuarios/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuário:', error);
      }
    };

    fetchUsuario();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/usuarios/${id}`, formData);
      // Add success handling
    } catch (error) {
      console.error('Erro ao atualizar usuário:', error);
    }
  };

  return (
    <div>
      <h1>Editar Usuário</h1>
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
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default EditarUsuario;