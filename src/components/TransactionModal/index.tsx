import React, { FormEvent, useState } from "react";
import Modal from 'react-modal';
import { Container, ContainerButton } from "./styles";
import closeModal from '../../assets/close.svg';
import incomeModal from '../../assets/income.svg';
import outcomeModal from '../../assets/outcome.svg';
import { api } from "../../services/api";

interface TransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps ) {

    const [title, setTitle ] = useState('');
    const[value, setValue] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('');
    
    function handleSubmitForms(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            value,
            category,
            type
        };

        api.post('/transactions', data)
    }

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

            <Container onSubmit = {handleSubmitForms}>
                <h2>Cadastrar Transação</h2>

                <input type="text" placeholder="Título"
                value = {title}
                onChange = {event => setTitle(event.target.value)}
                />

                <input type="number" placeholder="Valor"
                value = {value}
                onChange = {event => setValue(Number(event.target.value))}
                />

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

                <input type="text" placeholder="Categoria" 
                value = {category}
                onChange = {event => setCategory(event.target.value)}
                />
                
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}