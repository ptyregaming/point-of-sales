import React, { useState } from 'react';
import axios from 'axios';

function OrderProcessing() {
  const [order, setOrder] = useState({ tableId: '', items: [], totalAmount: 0 });
  const [transactionStatus, setTransactionStatus] = useState('');

  const completeOrder = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/transaction', order);
      setTransactionStatus(response.data.message);
    } catch (error) {
      setTransactionStatus('Transaction failed');
    }
  };

  return (
    <div>
      <h2>Order Processing</h2>
      <input type="text" placeholder="Table ID" onChange={(e) => setOrder({ ...order, tableId: e.target.value })} />
      <button onClick={completeOrder}>Complete Order</button>
      <p>{transactionStatus}</p>
    </div>
  );
}

export default OrderProcessing;