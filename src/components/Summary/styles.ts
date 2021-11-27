import styled from "styled-components";

export const Container = styled.div`

    display:flex;
    justify-content: space-between;
    align-items:center;
    gap: 3rem;
    margin-top: -3.2rem;
    
    div{ 
        padding: 2.5rem 3.2rem;
        background-color: white;
        height:14rem;
        max-width: 35rem;
        width: 30%;
        
        header {
            display:flex;
            justify-content: space-between;
        }
        
        h2 {
            font-weight: 600;
            font-size: 3.4rem;
        }

        &:last-child {
            background-color:#33CC95;
        }
        
    }
        
    `