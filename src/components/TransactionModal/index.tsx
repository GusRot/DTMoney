import React, { FormEvent, useContext, useState } from "react";
import Modal from 'react-modal';
import { Container, ContainerButton } from "./styles";
import closeModal from '../../assets/close.svg';
import incomeModal from '../../assets/income.svg';
import outcomeModal from '../../assets/outcome.svg';
import { TransactionsContext } from "../../TransactionsContent";

interface TransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function TransactionModal({isOpen, onRequestClose}: TransactionModalProps ) {

    const { createTransaction } = useContext(TransactionsContext)

    const [title, setTitle ] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');
    
    async function handleSubmitForms(event: FormEvent) { 
        
        event.preventDefault();
    
        await createTransaction({
            title,
            amount,
            category,
            type
        })

        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    
    // async function handleRemoveItem() { 
    //     const { createTransaction } = useContext(TransactionsContext)
    
    //     await createTransaction({
    //         title,
    //         amount,
    //         category,
    //         type
    //     })
    // }

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
                minLength = {2}
                required
                value = {title}
                onChange = {event => setTitle(event.target.value)}
                />

                <input type="number" placeholder="Valor"
                value = {amount}
                onChange = {event => setAmount(Number(event.target.value))}
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
                        <span>Saida</span>
                        <img src={outcomeModal} alt="Saídas" />
                    </button>
                </ContainerButton>

                <input type="text" placeholder="Categoria" 
                minLength = {2}
                required
                value = {category}
                onChange = {event => setCategory(event.target.value)}
                />
                
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}