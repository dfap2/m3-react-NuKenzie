import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    width: 100%;
    gap: 25px;

    h3 {
        display: block;
        width: 100%;
    }

    h2 {
        font-size: var(--title-2);
    }
`;

export const StyledList = styled.ul`
    display: flex;
    flex-direction: column;

    gap: 20px;
`;
