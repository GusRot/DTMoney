import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer } from "miragejs";


const apiObjects = [{
  id: 1,
  title: 'DEVV',  
  amount: 200,
  type: 'deposit',
  category: 'food',
  createdAt: '29/23/1231'
}]

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return (apiObjects)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

