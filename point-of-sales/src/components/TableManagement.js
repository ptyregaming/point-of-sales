// src/components/TableManagement.js
import React, { useState, useEffect } from 'react';
import { database, ref, set, onValue } from '../firebaseConfig';

function TableManagement() {
  const [tables, setTables] = useState([]);
  const [newOrder, setNewOrder] = useState({ tableId: '', items: [], status: 'Pending' });

  useEffect(() => {
    const tablesRef = ref(database, 'tables/');
    onValue(tablesRef, (snapshot) => {
      const data = snapshot.val();
      setTables(data ? Object.entries(data).map(([id, tableData]) => ({ id, ...tableData })) : []);
    });
  }, []);

  const addOrderToTable = () => {
    if (newOrder.tableId) { // Ensure a table ID is provided
      const tableRef = ref(database, `tables/${newOrder.tableId}`);
      set(tableRef, newOrder).then(() => {
        setNewOrder({ tableId: '', items: [], status: 'Pending' }); // Reset after adding
      });
    } else {
      alert('Please enter a valid Table ID.');
    }
  };

  return (
    <div>
      <h2>Table Management</h2>
      <input 
        type="text" 
        placeholder="Table ID" 
        value={newOrder.tableId} 
        onChange={(e) => setNewOrder({ ...newOrder, tableId: e.target.value })}
      />
      <button onClick={addOrderToTable}>Add Order</button>
      <ul>
        {tables.map((table) => (
          <li key={table.id}>
            Table {table.id}: {table.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableManagement;
