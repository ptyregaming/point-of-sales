import React, { useState } from 'react';
import axios from 'axios';

function POS() {
  const [item, setItem] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [transactionStatus, setTransactionStatus] = useState('');

  const handleTransaction = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/transaction', {
        item,
        quantity,
      });
      setTransactionStatus(response.data.message);
    } catch (error) {
      setTransactionStatus('Transaction failed');
    }
  };

  return (
    <div>
      <h2>POS</h2>
      <input
        type="text"
        placeholder="Item"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button onClick={handleTransaction}>Complete Transaction</button>
      <p>{transactionStatus}</p>
    </div>
  );
}

export default POS;