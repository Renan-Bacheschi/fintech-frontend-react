Fintech Frontend (React + Vite)

Descrição

Interface web desenvolvida em ReactJS, com CSS puro, responsável pela interação do usuário com o sistema Fintech.  
O frontend consome as APIs REST do backend Spring Boot e permite realizar operações de cadastro, listagem, edição e exclusão de usuários, contas e transações.

---

Tecnologias utilizadas
- ReactJS (Vite)
- React Router DOM
- Axios
- CSS puro (sem bibliotecas externas)
- JavaScript ES6

---

Como executar o projeto

Clonar o repositório
git clone https://github.com/seu-usuario/fintech-frontend-react.git
O sistema abrirá automaticamente no navegador em: http://localhost:5173
(a porta pode variar, ex: 5181, 5182…)

---

🔗 Integração com o Backend

O projeto consome as APIs REST do backend Spring Boot (porta 8080).
A configuração da conexão está no arquivo:

src/api/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080", // endereço do backend
});

export default api;

---

Observações

O frontend se comunica apenas com o backend rodando localmente (localhost:8080).
O CORS está configurado no backend para permitir o acesso.
Não utiliza frameworks de estilo (somente CSS puro).

---

👤 Desenvolvido por

Renan Mafra Bacheschi
Análise e Desenvolvimento de Sistemas — FIAP 2025
