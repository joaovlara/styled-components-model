import styled from "styled-components";

export const NavBarStack = styled.nav`
        display: flex;
        width: 90vw;
        align-items: center;
        padding-bottom: 1.5%;
        gap: 2vw;
    
        & > .nav-back {
            margin-right: 2vw;
        }
    
        & > .nav-links {
            display: flex;
            gap: 1vw;
        }
`;