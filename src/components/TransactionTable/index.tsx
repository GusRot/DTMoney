import { useEffect } from "react";
import { api } from "../../services/api";
import {Container} from "./styles";

export function TransactionTable() {

useEffect( () => {
    api.get('transactions').then(response => console.log(response.data))
}, []);


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
                    <tr>
                        <td>Dev Web</td>
                        <td>R$ 1200,00</td>
                        <td>DESENVOLVIMENTO</td>
                        <td>22/22/4421</td>
                    </tr>
                    <tr>
                        <td>Dev Web</td>
                        <td>R$ 1200,00</td>
                        <td>DESENVOLVIMENTO</td>
                        <td>22/22/4421</td>
                    </tr>
                    <tr>
                        <td>Dev Web</td>
                        <td>R$ 1200,00</td>
                        <td>DESENVOLVIMENTO</td>
                        <td>22/22/4421</td>
                    </tr>
                    <tr>
                        <td>Dev Web</td>
                        <td>R$ 1200,00</td>
                        <td>DESENVOLVIMENTO</td>
                        <td>22/22/4421</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}