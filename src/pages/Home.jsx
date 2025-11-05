import React from 'react';
import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <div>
      <NavBar />
      <h1>Dashboard Financeiro</h1>
      <div className="dashboard">
        {/* Add dashboard widgets and statistics here */}
      </div>
    </div>
  );
};

export default Home;