import React from 'react';
import {Container} from "./styles";


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

export function TransactionTable({newTransactions} : newTransactionsProps) {
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    {newTransactions.map((transaction) => (
                    <tr key = {transaction.id}>
                        <td>{transaction.title}</td>
                        <td 
                         className = {'withdraw' === transaction.type ? 'withdraw' : 'deposit'}
                        >
                            {new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL'
                            }).format(transaction.amount)}</td>
                        <td>{transaction.category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
                    </tr>))}
                </tbody>
            </table>
        </Container>
    )
}