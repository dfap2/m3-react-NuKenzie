import styled from "styled-components";

export const StyledCard = styled.li`
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;

    width: 100%;
    padding: 15px 10px;

    border-radius: var(--radius);
    background-color: var(--grey-1);
    border-left: 4px solid
        ${(props) => (props.type == "Entrada" ? "green" : "var(--grey-2)")};

    h3 {
        font-size: var(--title-3);
    }

    .title__container {
        display: flex;
        flex-direction: column;

        gap: 40px;
    }

    .title__container > span {
        font-size: var(--body);
    }

    .price__container {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        gap: 30px;
    }

    .card__button {
        box-sizing: border-box;

        height: 25px;
        width: 70px;
        padding: 0 15px;

        border: none;
        border-radius: var(--radius);
        background-color: var(--grey-2);
        cursor: pointer;
    }
`;
