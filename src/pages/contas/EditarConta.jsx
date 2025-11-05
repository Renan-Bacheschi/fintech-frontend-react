import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import FormField from '../../components/FormField';
import api from '../../../fintech-frontend-react/src/api/client';

const EditarConta = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    nome: '',
    tipo: ''
  });

  useEffect(() => {
    const fetchConta = async () => {
      try {
        const response = await api.get(`/contas/${id}`);
        setFormData(response.data);
      } catch (error) {
        console.error('Erro ao buscar conta:', error);
      }
    };

    fetchConta();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/contas/${id}`, formData);
      // Add success handling
    } catch (error) {
      console.error('Erro ao atualizar conta:', error);
    }
  };

  return (
    <div>
      <h1>Editar Conta</h1>
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
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default EditarConta;