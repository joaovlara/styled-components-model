import styled from "styled-components";

export const TitleMain = styled.h1`
  font-family: "Press Start 2P", serif;
  font-size: 3rem;
  border: 2px solid ${props => props.borderColor || 'none'};
  color: ${props => props.color || 'white'};
`;

export const TitleSub = styled.h3`
    font-family: "Ubuntu Mono", serif;
    font-size: 1.5rem;
    color: ${(props) => props.color || 'white'};
`;

export const Text = styled.p`
    font-family: "Ubuntu Mono", serif;
    font-size: 1rem;
    color: ${(props) => props.color || 'gray'};
`;

export const Caption = styled.p`
    font-family: "Ubuntu Mono", serif;

    color: ${(props) => props.color || props.theme.colors.light};
`;

export const TagText = styled.p`
    font-family: "Ubuntu Mono", serif;

    color: ${(props) => props.color || props.theme.colors.light};
`;