import { Container } from "./styles";
import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";
import React from "react";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionTable />
        </Container>
    );
}
