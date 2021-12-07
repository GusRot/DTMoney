import moment from "moment";
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, "id" | "createdAt">;

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
    deleteTransaction: (id: number) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
        api.get("transactions").then((response) =>
            setTransactions(response.data.transactions)
        );
    }, []);

    useEffect(() => {
        const cache = JSON.parse(localStorage.getItem("transactions") || "{}");

        if (cache.length) {
            console.log("existe");
            createCache(cache);
        }
    }, []);

    async function createTransaction(transactionInput: TransactionInput) {
        const createdDate = moment(new Date());
        const response = await api.post("/transactions", {
            ...transactionInput,
            createdAt: createdDate.format("DD/MM/YYYY"),
        });

        const { transaction } = response.data;

        setTransactions([...transactions, transaction]);
        localStorage.setItem(
            "transactions",
            JSON.stringify([...transactions, transaction])
        );
    }

    async function createCache(transactionsCache: [Transaction]) {
        await api.post("/transactions", transactionsCache);

        setTransactions(transactionsCache);
    }

    async function deleteTransaction(id: number) {
        await api.post(`/transactions`, {
            method: "DELETE",
        });

        let temporary = transactions.filter((M: Transaction) => M.id !== id);
        for (let i = 0; i < temporary.length; i++) {
            if (i + 1 < temporary[i].id) {
                temporary[i].id = i + 1;
            }
        }

        setTransactions(temporary);
        localStorage.setItem("transactions", JSON.stringify(temporary));
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions, createTransaction, deleteTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    );
}
