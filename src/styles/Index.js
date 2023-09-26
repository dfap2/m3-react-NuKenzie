import styled from "styled-components";

export const StyledDivContainer = styled.div`
    display: flex;

    margin-bottom: 50px;
    margin-inline: 15px;

    main {
        display: flex;
        flex-direction: column;

        gap: 59px;
        width: 1440px;
        margin: 0 auto;
    }

    .form__container {
        display: flex;
        flex-direction: column;

        gap: 18px;
    }

    @media (min-width: 769px) {
        margin-inline: 100px;

        main {
            flex-direction: row;
        }
    }
`;

export const StyledHeader = styled.header`
    height: 69px;
    margin-bottom: 15px;
    margin-inline: 15px;

    background-color: var(--grey-1);

    .header__container {
        display: flex;
        align-items: center;
        box-sizing: border-box;

        margin: 0 auto;
        height: 100%;
        width: 100%;
        max-width: 1440px;
    }

    .header__container > span {
        margin: auto 0;
    }

    @media (min-width: 769px) {
        height: 88px;
    }
`;
