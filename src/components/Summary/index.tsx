import { Container, ContainerButton } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import React, { useContext, useState } from "react";
import { TransactionsContext } from "../../TransactionsContent";


export function Summary() {

    const {transactions} = useContext(TransactionsContext);

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc
    }, {
        deposits: 0,
        withdraws: 0,
        total: 0
    })

    const [showAmount, setShowAmount] = useState('');

    function showAmounts() {
        if (showAmount !== 'active') {
            setShowAmount('active');
        } else {
            setShowAmount('')
        }
    }

    return(
        <>
            <ContainerButton>
                <button type='button' onClick = {showAmounts}>Mostrar Valores</button>
            </ContainerButton>
            
            <Container>
                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={incomeImg} alt="" />
                    </header>
                    <h2 className = {showAmount === 'active' ? 'active' : ''}> 
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.deposits)}
                    </h2>
                    <span className = {showAmount === 'active' ? 'none' : ''}>$$$$</span>
                </div>   
                <div>
                    <header>
                        <p>Saídas</p>
                        <img src={outcomeImg} alt="" />
                    </header>
                    <h2 className = {showAmount === 'active' ? 'active' : ''}> 
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.withdraws)}
                    </h2>
                    <span className = {showAmount === 'active' ? 'none' : ''}>$$$$</span>
                </div>
                <div>
                    <header>
                        <p>Total</p>
                        <img src={totalImg} alt="" />
                    </header>
                    <h2 className = {showAmount === 'active' ? 'active' : ''}> 
                        {new Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total)}
                    </h2>
                    <span className = {showAmount === 'active' ? 'none' : ''}>$$$$</span>  
                </div>
            </Container>
        </>
    )
}