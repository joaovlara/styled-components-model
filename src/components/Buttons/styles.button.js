import styled from "styled-components";

export const CustomButton =styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 2px solid white;
    height: 8vh;
    width: 25vw;
    cursor: pointer;
    
    background-color: ${(props) => props.theme.colors.primary};
`;