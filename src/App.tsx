import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import React, { useState } from "react";
import Modal from "react-modal";
import { TransactionModal } from "./components/TransactionModal";
import { TransactionsProvider } from "./TransactionsContent";

Modal.setAppElement("#root");

function App() {
    const [modalOpen, setModalOpen] = useState(false);

    function handleModalOpen() {
        setModalOpen(true);
    }

    function handleModalClose() {
        setModalOpen(false);
    }

    return (
        <TransactionsProvider>
            <Header onOpenTransactionModal={handleModalOpen} />
            <Dashboard />
            <TransactionModal
                isOpen={modalOpen}
                onRequestClose={handleModalClose}
            />
            <GlobalStyle />
        </TransactionsProvider>
    );
}

export default App;
