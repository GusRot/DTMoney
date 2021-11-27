import styled from "styled-components";

export const Container = styled.div`

    margin-top: 5rem;

    table {
        width: 100%;
        border-spacing:0.7rem;
        

        th {
            color: grey;
            font-weight:500;
            padding: 1.2rem 2.2rem;
            color: grey;
        }

        td {
            padding: 1.2rem 2.2rem;
            background-color: white;
            color: grey;
            text-align: center;

            &:first-child {
                color: #363F5F;
            }
        }
    }
`