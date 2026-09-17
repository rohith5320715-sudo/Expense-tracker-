import React, { useState, useEffect } from 'react';
import api from './services/api';
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [form, setForm] = useState({ title: '', amount: '', category: 'Food', date: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await api.get('expenses/');
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingId) {
        await api.put(`expenses/${editingId}/`, form);
        setEditingId(null);
      } else {
        await api.post('expenses/', form);
      }
      setForm({ title: '', amount: '', category: 'Food', date: '', description: '' });
      fetchExpenses();
    } catch (error) {
      console.error('Error saving expense:', error);
    }
  };

  const handleEdit = (expense) => {
    setForm(expense);
    setEditingId(expense.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        await api.delete(`expenses/${id}/`);
        fetchExpenses();
      } catch (error) {
        console.error('Error deleting expense:', error);
      }
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Expense Tracker</h1>

      <form onSubmit={handleSubmit} style={{ background: '#f4f4f4', padding: '15px', borderRadius: '5px', marginBottom: '20px' }}>
        <h3>{editingId ? 'Edit Expense' : 'Add New Expense'}</h3>
        <input type="text" placeholder="Title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }} />
        <input type="number" step="0.01" placeholder="Amount" value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} required style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }} />
        <input type="text" placeholder="Category (e.g., Food, Travel)" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }} />
        <input type="date" value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} required style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }} />
        <button type="submit" style={{ background: '#007BFF', color: 'white', padding: '10px 15px', border: 'none', cursor: 'pointer' }}>{editingId ? 'Update' : 'Add'} Expense</button>
      </form>

      <h3>Expense List</h3>
      <table border="1" cellPadding="10" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.title}</td>
              <td>${exp.amount}</td>
              <td>{exp.category}</td>
              <td>{exp.date}</td>
              <td>
                <button onClick={() => handleEdit(exp)} style={{ marginRight: '5px' }}>Edit</button>
                <button onClick={() => handleDelete(exp.id)} style={{ color: 'red' }}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
