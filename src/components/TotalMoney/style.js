import styled from "styled-components";

export const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 30px 20px 42px 20px;
    gap: 25px;

    border: 1px solid rgb(0, 0, 0, 0.2);

    div {
        display: flex;
        justify-content: space-between;
    }

    > span {
        font-size: var(--body);
    }
`;
