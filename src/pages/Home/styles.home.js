import styled from "styled-components";

export const Avatar = styled.img`
    border-radius: 50%;
    max-width: 24vw;
`;

export const StartBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20%;
    width: 100%;
    border-radius: 15px;
    border: none;
    font-family: "Press Start 2P", serif;
    color: white;
    font-size: large;

    background-color: ${(props) => props.color || props.theme.colors.teal};
`;