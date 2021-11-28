import React, { useState } from "react";
import Modal from 'react-modal';
import { Container, ContainerButton } from "./styles";
import closeModal from '../../assets/close.svg';
import incomeModal from '../../assets/income.svg';
import outcomeModal from '../../assets/outcome.svg';

interface TransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps ) {

    const [type, setType] = useState('');

    return (
        <Modal 
        isOpen = {isOpen}
        onRequestClose = {onRequestClose}
        overlayClassName= "react-modal-overlay"
        className = "react-modal-content"
        >
            <button className='react-modal-close' type ='button' onClick={onRequestClose}>
                <img src={closeModal} alt="" />
            </button>

            <Container>
                <h2>Cadastrar Transação</h2>

                <input type="text" placeholder="Título" />

                <input type="number" placeholder="Valor"/>

                <ContainerButton>
                    <button
                    type = "button"
                    className = {type === 'deposit' ? 'active' : ''}
                    onClick = {() => {setType('deposit')}}
                    >
                        <span>Entrada</span>
                        <img src={incomeModal} alt="Entradas" />
                    </button>

                    <button
                    type = "button"
                    className = {type === 'withdraw' ? 'active' : ''}
                    onClick = {() => {setType('withdraw')}}>
                        <span>Entrada</span>
                        <img src={outcomeModal} alt="Saídas" />
                    </button>
                </ContainerButton>

                <input type="text" placeholder="Categoria" />
                
                <button type="button">Cadastrar</button>
            </Container>
        </Modal>
    )
}