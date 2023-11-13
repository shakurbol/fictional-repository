import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [newTransaction, setNewTransaction] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Implement code to add a new transaction (if needed)
    // Then, add the new transaction to the 'transactions' state
    addTransaction(newTransaction);
    setNewTransaction({});
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Date:
        <input
          type="date"
          value={newTransaction.date || ''}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, date: e.target.value })
          }
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={newTransaction.description || ''}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, description: e.target.value })
          }
        />
      </label>
      <label>
        Category:
        <input
          type="text"
          value={newTransaction.category || ''}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, category: e.target.value })
          }
        />
      </label>
      <label>
        Amount:
        <input
          type="number"
          value={newTransaction.amount || ''}
          onChange={(e) =>
            setNewTransaction({ ...newTransaction, amount: e.target.value })
          }
        />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;