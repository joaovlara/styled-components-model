import styled, { css } from "styled-components";

export const CustomButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 2px solid white;
    height: 8vh;
    width: 25vw;
    cursor: pointer;

    color: white;
    background-color: transparent ;
    /* background-color: ${(props) => props.theme.colors.primary}; */
`;

export const ButtonDefault = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  height: 8vh;
  width: 25vw;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Press Start 2P';
  transition: all 0.3s ease-in-out;

  ${({ theme, variant, color, borderColor, $active }) => {
    // Se ativo, fundo igual à cor da borda
    if ($active) {
      return css`
        background-color: ${borderColor || theme.colors.primary};
        border: 2px solid ${borderColor || theme.colors.primary};
        color: white;
      `;
    }
    switch (variant) {
      case "primary":
        return css`
          background-color: ${color || theme.colors.primary};
          border: 2px solid ${borderColor || theme.colors.primary};
          color: white;
        `;
      case "outline":
        return css`
          background-color: transparent;
          border: 2px solid ${borderColor || theme.colors.primary};
          color: ${color || theme.colors.primary};
        `;
      case "ghost":
        return css`
          background-color: transparent;
          border: none;
          color: ${color || theme.colors.primary};
        `;
      default:
        return css`
          background-color: transparent;
          border: 2px solid white;
          color: white;
        `;
    }
  }}

  &:hover {
    opacity: 0.8;
    transform: scale(1.05);
  }
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 3rem;
  color: ${({ color }) => color};
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  transition: 0.3s;

  &:hover {
    opacity: 1;
    transform: scale(1.1);
  }
`;