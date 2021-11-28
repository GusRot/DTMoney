import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import React from "react";

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="" />
                </header>
                <h2>R$ 17.000,00</h2>
            </div>   
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="" />
                </header>
                <h2>R$ -1.000,00</h2>
            </div>
            <div>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="" />
                </header>
                <h2>R$ 16.000,00</h2>
            </div>
        </Container>
    )
}