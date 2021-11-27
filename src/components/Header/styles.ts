import styled from "styled-components";

export const Container = styled.header`
    background-color:#5429CC;
    height: 21rem;

    .container {
        margin: 0 auto;
        padding: 4rem 0;
        width: 100%;
        max-width: 1024px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
            cursor: pointer;
        }

        button {
            height: 5rem;
            width: 20rem;
            border: none;
            padding: 0.5rem 2rem;
            border-radius: 0.5rem;
            background-color: #6933FF;
            color: white;
            cursor: pointer;
            transition: filter 0.2s;

            &:hover {
                filter: brightness(0.9);
            }
        }
        
    }


`
