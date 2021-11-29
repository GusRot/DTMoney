import styled from "styled-components";

export const Container = styled.div`

    margin-top: 5rem;

    table {
        width: 100%;
        border-spacing:0.7rem;
        

        th {
            color: grey;
            font-weight:500;
            padding: 0.4rem 1.2rem;
            color: grey;
            border-bottom: 1px solid rgba(0,0,0,0.2);

            &:last-child {
                width: 3rem;
            }
        }

        td {
            padding: 1rem 1.2rem;
            background-color: white;
            border-bottom: 1px solid rgba(0,0,0,0.2);
            color: grey;
            text-align: center;
            word-break: break-all;
            text-justify: justify;
            vertical-align: middle;
            margin-bottom: 0.8rem;

            &:first-child {
                color: #363F5F;
            }

            &:nth-child(2n) {
                min-width: 14rem;
            }
        }

        .withdraw {
            color: red;
        }

        .deposit {
            color: green;
        }

        button {
            border: none;
	        background: transparent;
        }

        @media(max-width:500px) {

            th:last-child {
                width: 2rem;
            }

            td:nth-child(2n) {
                min-width: 4rem;
            }
        }
    }
`