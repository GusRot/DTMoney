import styled from "styled-components";

export const Container = styled.form`

    h2 {
        color: grey;
        font-size: 2rem;
        margin-bottom: 2.3rem;

    }

    input {
        width:100%;
        padding: 0 0.2rem;
        height: 4rem;
        border: 1px solid #D7D7D7;
        background: #e7e9ee;
        border-radius: 0.4rem;
        margin-bottom: 1.2rem;

        &::placeholder {
            color: black;
        }

    }

    button {
        background: rgba(100,244,140,0.6);
        width:100%;
        padding: 0 0.2rem;
        height: 4rem;
        border-radius: 0.4rem;
        border: 0;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`
export const ContainerButton = styled.div`

    margin: 1.2rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;

    button {
        height: 5rem;
        border: 1px solid #D7D7D7;
        background: transparent;
        display: flex;
        align-items: center;
        justify-content:center;
        gap: 1.5rem;
        color: black; 
        padding: 0 1rem;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
        
        img {
            width: 2rem;
            height: 2rem;
        }
    }

    .active {
    
        background-color: rgba( 244, 104, 100, 0.5);
    
        &:first-child { 
            background-color: rgba( 100, 244, 100, 0.5);
        }
    }
    `
