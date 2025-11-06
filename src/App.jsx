import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./components/PrivateRoute";

// Transações
import ListarTransacoes from "./pages/transacoes/ListarTransacoes";
import CriarTransacoes from "./pages/transacoes/CriarTransacoes";
import EditarTransacoes from "./pages/transacoes/EditarTransacoes";

// Contas
import ListarContas from "./pages/contas/ListarContas";
import CriarContas from "./pages/contas/CriarContas";
import EditarContas from "./pages/contas/EditarContas";

// Usuáris
import ListarUsuarios from "./pages/usuarios/ListarUsuarios";
import CriarUsuarios from "./pages/usuarios/CriarUsuarios";
import EditarUsuarios from "./pages/usuarios/EditarUsuarios";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>

          {/* Página inicial (Dashboard) */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          {/* Login */}
          <Route path="/login" element={<Login />} />

          {/* Transações */}
          <Route
            path="/transacoes"
            element={
              <PrivateRoute>
                <ListarTransacoes />
              </PrivateRoute>
            }
          />
          <Route
            path="/transacoes/nova"
            element={
              <PrivateRoute>
                <CriarTransacoes />
              </PrivateRoute>
            }
          />
          <Route
            path="/transacoes/:id/editar"
            element={
              <PrivateRoute>
                <EditarTransacoes />
              </PrivateRoute>
            }
          />

          {/* Contas */}
          <Route
            path="/contas"
            element={
              <PrivateRoute>
                <ListarContas />
              </PrivateRoute>
            }
          />
          <Route
            path="/contas/nova"
            element={
              <PrivateRoute>
                <CriarContas />
              </PrivateRoute>
            }
          />
          <Route
            path="/contas/:id/editar"
            element={
              <PrivateRoute>
                <EditarContas />
              </PrivateRoute>
            }
          />

          {/* Usuários */}
          <Route
            path="/usuarios"
            element={
              <PrivateRoute>
                <ListarUsuarios />
              </PrivateRoute>
            }
          />
          <Route
            path="/usuarios/novo"
            element={
              <PrivateRoute>
                <CriarUsuarios />
              </PrivateRoute>
            }
          />
          <Route
            path="/usuarios/:id/editar"
            element={
              <PrivateRoute>
                <EditarUsuarios />
              </PrivateRoute>
            }
          />

          {/* Página não encontrada */}
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;