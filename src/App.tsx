import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import React from 'react';

function App() {
  return (
    <>
    <Header/>
    <Dashboard />
    <GlobalStyle/>
    </>
  );
}

export default App;
