import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>Restaurant POS System</h1>
      <p>Selamat datang di Sistem Point of Sale. Silakan pilih salah satu opsi di bawah ini:</p>
      <div style={{ marginTop: '1rem' }}>
        <Link to="/menu" style={{ padding: '1rem', display: 'inline-block', textDecoration: 'none', color: 'white', backgroundColor: '#007BFF', margin: '0.5rem' }}>Menu</Link>
        <Link to="/tables" style={{ padding: '1rem', display: 'inline-block', textDecoration: 'none', color: 'white', backgroundColor: '#28A745', margin: '0.5rem' }}>Table Management</Link>
        <Link to="/orders" style={{ padding: '1rem', display: 'inline-block', textDecoration: 'none', color: 'white', backgroundColor: '#17A2B8', margin: '0.5rem' }}>Order Processing</Link>
      </div>
    </div>
  );
}

export default HomePage;
