import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: ${({ width }) => width || "100%"};
  font-family: monospace;
  border: 2px solid ${({ borderColor }) => borderColor || "#00e5ff"};
  border-radius: 12px;
  background-color: ${({ bgColor }) => bgColor || "#111"};
  color: ${({ textColor }) => textColor || "#00e5ff"};
`;

export const CardFooter = styled.div`
  display: flex;
  border-top: 2px solid ${({ borderColor }) => borderColor || "#00e5ff"};
`;

export const FooterButton = styled.a`
  flex: 1;
  text-align: center;
  color: ${({ textColor }) => textColor || "#00e5ff"};
  text-decoration: none;
  border-right: ${({ hasBorder, borderColor }) =>
    hasBorder ? `2px solid ${borderColor || "#00e5ff"}` : "none"};
  transition: background 0.2s;

  &:hover {
    background-color: ${({ hoverColor }) => hoverColor || "#00e5ff22"};
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: row; // linha
  align-items: center; // centraliza verticalmente
  padding: 2%;
  gap: 1rem;

  @media (max-width: 600px) {
    flex-direction: column; // mobile: ícone em cima do texto
  }
`;

export const IconColumn = styled.div`
  flex: 0 0 30%; // 30% da largura
  display: flex;
  justify-content: center; // centraliza horizontal
  align-items: center;     // centraliza vertical
  font-size: 4rem;

  @media (max-width: 600px) {
    flex: 0 0 auto;
    font-size: 3rem;
    margin: 0 auto; // centraliza horizontal no mobile
  }
`;

export const TextColumn = styled.div`
  flex: 0 0 70%; // 70% da largura
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 600px) {
    flex: 1 1 100%;
    text-align: center; // centraliza texto no mobile
  }
`;

export const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.4;
  margin: 0;
`;

export const Title = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.2rem;
  color: ${({ titleColor }) => titleColor || "#fff"};
`;