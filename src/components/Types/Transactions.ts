import { ReactNode } from "react";

export interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

export type TransactionInput = Omit<Transaction, "id" | "createdAt">;

export interface TransactionsProviderProps {
    children: ReactNode;
}

export interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
    deleteTransaction: (id: number) => Promise<void>;
}

export interface TransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export interface HeaderProps {
    onOpenTransactionModal: () => void;
}
