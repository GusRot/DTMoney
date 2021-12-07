import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 3rem;
    margin-top: -3.2rem;

    div {
        padding: 2rem 2.2rem;
        background-color: white;
        height: 14rem;
        max-width: 35rem;
        width: 30%;
        position: relative;

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
        }

        h2 {
            display: none;
            font-weight: 600;
            font-size: 3.4rem;
            text-align: center;
            word-break: break-all;
        }

        span {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            top: 6rem;
            font-size: 4rem;
            text-align: center;
        }

        &:last-child {
            background-color: #33cc95;
        }

        .active {
            display: inline;
        }

        .none {
            display: none;
        }
    }

    @media (max-width: 790px) {
        flex-wrap: wrap;
        justify-content: center;

        div {
            height: 14rem;
            max-width: 35rem;
            width: 40%;
        }
    }

    @media (max-width: 500px) {
        flex-direction: column;
    }
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -7.2rem;
    padding-bottom: 4rem;

    button {
        height: 5rem;
        width: 20rem;
        border: none;
        padding: 0.5rem 2rem;
        border-radius: 0.5rem;
        background-color: ${transparentize(0.7, "grey")};
        color: white;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`;
