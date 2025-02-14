// Componentes padrões que podem ser reutilizados em toda interface: //

import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.colors.black};
`;

export const Box = styled.div`
    display: flex;
    height: 80vh;
    width: 90vw;
    border-radius: 15px;
    border: solid 5px ${(props) => props.theme.colors.light};
`;

export const Stack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5%;
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 5%;
`;

export const Row = styled.span`
    display: flex;
`;

export const SpaceRow = styled.span`
    display: flex;
    width: 90vw;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1.5%;
`;