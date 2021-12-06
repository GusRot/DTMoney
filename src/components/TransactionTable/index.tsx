import React, { useContext } from "react";
import { TransactionsContext } from "../../TransactionsContent";
import { Container } from "./styles";
import { BiTrash } from "react-icons/bi";

export function TransactionTable() {
    const { transactions } = useContext(TransactionsContext);
    const { deleteTransaction } = useContext(TransactionsContext);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {transactions
                        .slice(0)
                        .reverse()
                        .map((transaction) => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td
                                    className={
                                        "withdraw" === transaction.type
                                            ? "withdraw"
                                            : "deposit"
                                    }
                                >
                                    {new Intl.NumberFormat("pt-BR", {
                                        style: "currency",
                                        currency: "BRL",
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat("pt-BR").format(
                                        new Date(transaction.createdAt)
                                    )}
                                </td>
                                <td>
                                    <button type="button">
                                        <BiTrash
                                            className="trash-icon"
                                            onClick={() =>
                                                deleteTransaction(
                                                    transaction.id
                                                )
                                            }
                                        />
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Container>
    );
}
