import logoImg from '../../assets/logo.svg';
import { Container } from './styles';
import React from 'react';

interface HeaderProps {
    onOpenTransactionModal: () => void;
}


export function Header({onOpenTransactionModal}: HeaderProps) {

    return(
        <Container>
            <div className="container">
                <img src={logoImg} alt="DT Money" />
                <button type = "button" onClick = {onOpenTransactionModal}>Nova Transação</button>
            </div>
        </Container>
    )
}