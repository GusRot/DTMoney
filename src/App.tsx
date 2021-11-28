import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { TransactionModal } from './components/TransactionModal';

Modal.setAppElement('#root');


function App() {

  const[modalOpen, setModalOpen] = useState(false);

  function handleModalOpen() {
     setModalOpen(true);
  }
 
  function handleModalClose() {
     setModalOpen(false);
  }

  return (
    <>
    <Header onOpenTransactionModal = {handleModalOpen}/>
    <Dashboard />
    <TransactionModal 
      isOpen = {modalOpen}
      onRequestClose = {handleModalClose}
    />
    <GlobalStyle/>
    </>
  );
}

export default App;
