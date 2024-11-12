import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import Menu from './components/Menu';
import TableManagement from './components/TableManagement';
import OrderProcessing from './components/OrderProcessing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/tables" element={<TableManagement />} />
        <Route path="/orders" element={<OrderProcessing />} />
      </Routes>
    </Router>
  );
}

export default App;