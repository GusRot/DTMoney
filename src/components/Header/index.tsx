import logoImg from '../../assets/logo.svg';
import { Container } from './styles';
import React from 'react';


export function Header() {

//  const[modalOpen, setModalOpen] = useState(false);

//  function handleModalOpen() {
//     setModalOpen(true);
//  }

//  function handleModalClose() {
//     setModalOpen(false)
//  }

    return(
        <Container>
            <div className="container">
                <img src={logoImg} alt="DT Money" />
                <button type = "button">Nova Transação</button>
            </div>
        </Container>
    )
}