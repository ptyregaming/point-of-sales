import React, { useEffect, useState } from 'react';
import { database, ref, onValue } from '../firebaseConfig';

function Inventory() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const inventoryRef = ref(database, 'inventory/');
    onValue(inventoryRef, (snapshot) => {
      const data = snapshot.val();
      setInventory(data ? Object.values(data) : []);
    });
  }, []);

  return (
    <div>
      <h2>Inventory</h2>
      <ul>
        {inventory.map((item) => (
          <li key={item.id}>{item.name}: {item.stock}</li>
        ))}
      </ul>
    </div>
  );
}

export default Inventory;