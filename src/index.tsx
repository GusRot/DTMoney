import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createServer, Model } from "miragejs";


const apiObjects = [{
  id: 1,
  title: 'DEVV',  
  amount: 200,
  type: 'withdraw',
  category: 'food',
  createdAt: '2012-02-12'
}, {
  id: 2,
  title: 'DEVV2',  
  amount: 200,
  type: 'deposit',
  category: 'food',
  createdAt: '2012-02-12'
}, {
  id: 3,
  title: 'DEVV3',  
  amount: 200,
  type: 'deposit',
  category: 'food',
  createdAt: '2012-02-12'
}]

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: apiObjects
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

