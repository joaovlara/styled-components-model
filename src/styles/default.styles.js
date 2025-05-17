// Componentes padrões que podem ser reutilizados em toda interface: //

import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.color || props.theme.colors.black};
`;

export const Box = styled.div`
    display: flex;
    height: 80vh;
    width: 90vw;
    border-radius: 15px;
    border: solid 4px ${(props) => props.borderColor || props.theme.colors.light};
`;

export const Col = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: ${(props) => props.width || '50%' };
`;

export const Row = styled.span`
    display: flex;
    padding: 5%;
`;

export const Stack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  gap: ${props => props.gap || '5%'};
  height: 100%;
  width: 100%;
`;