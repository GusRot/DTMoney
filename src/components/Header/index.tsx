import logoImg from '../../assets/logo.svg';
import { Container } from './styles';
import React, { useState } from 'react';
import Modal from 'react-modal';


export function Header() {

 const[modalOpen, setModalOpen] = useState(false);

 function handleModalOpen() {
    setModalOpen(true);
 }

 function handleModalClose() {
    setModalOpen(false);
 }

    return(
        <Container>
            <div className="container">
                <img src={logoImg} alt="DT Money" />
                <button type = "button" onClick = {handleModalOpen}>Nova Transação</button>

                <Modal 
                isOpen = {modalOpen}
                onRequestClose = {handleModalClose}
                >
                    <h2>Cadastrar</h2>
                </Modal>
            </div>
        </Container>
    )
}