import { Container, ContainerButton } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import React, { useState } from "react";

interface newTransactionsProps {
    newTransactions: Array<{
        id: number;
        title: string;
        amount: number;
        type: string;
        category: string;
        createdAt: string;
    }>
}

export function Summary({newTransactions} : newTransactionsProps) {

    const [totalAPI, setTotalAPI] = useState("$$$$$$");
    const [depositAPI, setDepositAPI] = useState("$$$$$$");
    const [withdrawAPI, setWithdrawAPI] = useState("$$$$$$");

    function sumAPI() {
        let deposits = 0;
        let withdraws = 0;
        for(let i=0; i<newTransactions.length; i++) {

            if(newTransactions[i].type === 'deposit') {
            deposits += newTransactions[1].amount;
            } else if (newTransactions[i].type === 'withdraw') {
                withdraws += newTransactions[1].amount;
            } 
        }

        const total = `${deposits - withdraws}`;
        setTotalAPI(total);
        setDepositAPI(`${deposits}`);
        setWithdrawAPI(`${withdraws}`);
    }


    return(
        <>
            <ContainerButton>
                <button onClick = {sumAPI}>Mostrar Valores</button>
            </ContainerButton>
            
            <Container>
                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={incomeImg} alt="" />
                    </header>
                    <h2>R$ {depositAPI}</h2>
                </div>   
                <div>
                    <header>
                        <p>Saídas</p>
                        <img src={outcomeImg} alt="" />
                    </header>
                    <h2>R$ {withdrawAPI}</h2>
                </div>
                <div>
                    <header>
                        <p>Total</p>
                        <img src={totalImg} alt="" />
                    </header>
                    <h2>R$ {totalAPI}</h2>
                </div>
            </Container>
        </>
    )
}