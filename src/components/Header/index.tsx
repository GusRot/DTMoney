import logoImg from "../../assets/logo.svg";
import { Container } from "./styles";
import React from "react";
import { HeaderProps } from "../Types/Transactions";

export function Header({ onOpenTransactionModal }: HeaderProps) {
    return (
        <Container>
            <div className="container">
                <img src={logoImg} alt="DT Money" />
                <button type="button" onClick={onOpenTransactionModal}>
                    Nova Transação
                </button>
            </div>
        </Container>
    );
}
