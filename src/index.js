import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Componentes/Navbar';
import TodoList from './Componentes/TodoList';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <TodoList />
  </React.StrictMode>
);
