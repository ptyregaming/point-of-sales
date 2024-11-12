import React, { useEffect, useState } from 'react';
import { database, ref, set, onValue } from '../firebaseConfig';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);
  const [newItem, setNewItem] = useState({ name: '', price: 0 });

  useEffect(() => {
    // Reference ke 'menu' collection di Firebase
    const menuRef = ref(database, 'menu/');
    onValue(menuRef, (snapshot) => {
      const data = snapshot.val();
      setMenuItems(data ? Object.values(data) : []);
    });
  }, []);

  // isi item baru di Firebase database
  const addItem = () => {
    if (newItem.name && newItem.price > 0) { // cek nama item dan harga
      const newItemRef = ref(database, `menu/${newItem.name}`);
      set(newItemRef, newItem).then(() => {
        setNewItem({ name: '', price: 0 }); // reset setelah merubah
      });
    } else {
      alert('Please provide a valid item name and price.');
    }
  };

  return (
    <div>
      <h2>Menu Management</h2>
      <input 
        type="text" 
        placeholder="Item Name" 
        value={newItem.name} 
        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
      />
      <input 
        type="number" 
        placeholder="Price" 
        value={newItem.price} 
        onChange={(e) => setNewItem({ ...newItem, price: parseFloat(e.target.value) })}
      />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index}>{item.name}: ${item.price.toFixed(2)}</li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
