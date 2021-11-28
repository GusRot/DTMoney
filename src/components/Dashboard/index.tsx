import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";
import React, { useEffect, useState } from "react";
import { api } from "../../services/api";


interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export function Dashboard() {

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect( () => {
        api.get('transactions').then(response => setTransactions(response.data.transactions))
    }, []);

    return(
        <Container>
            <Summary 
            newTransactions = {transactions}
            />
            <TransactionTable 
            newTransactions = {transactions}
            />
        </Container>
    )
}