import React, { useEffect, useState } from 'react';
import './App.css';
import SearchForm from './component/SearchBar';
import Transaction from './component/Transaction';
import TransactionForm from './component/TransactionForm';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [setSearchTerm] = useState('');

  useEffect(() => {
    fetch('   http://localhost:3000/transactions' ) 
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      });
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  const handleAddTransaction = (newTransaction) => {
    // Generate a unique ID for the new transaction
    newTransaction.id = transactions.length + 1;
    setFilteredTransactions([...filteredTransactions, newTransaction]);
  };

  return (
    <div className="App">
      <h1>Transaction App</h1>
      <SearchForm onSearch={handleSearch} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {filteredTransactions.map((transaction) => (
            <Transaction key={transaction.id} transaction={transaction} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
