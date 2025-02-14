import styled from "styled-components";

export const TitleMain = styled.h1`
    font-family: "Press Start 2P", serif;
    font-weight: 500;
    font-size: xx-large;
    font-style: normal;

    color: white;
`;

export const TitleSub = styled.h3`
    font-family: "Ubuntu Mono", serif;
    font-weight: 700;
    font-style: normal;

    color: white;
`;

export const Text = styled.p`
    font-family: "Ubuntu Mono", serif;
    font-weight: 400;
    font-style: normal;

    color: white;
`;

export const Caption = styled.p`
    font-family: "Ubuntu Mono", serif;
    font-weight: 400;
    font-style: normal;

    color: ${(props) => props.color || props.theme.colors.light};
`;

export const TagText = styled.p`
    font-family: "Ubuntu Mono", serif;
    font-weight: bold;
    font-style: normal;

    color: ${(props) => props.color || props.theme.colors.light};
`;