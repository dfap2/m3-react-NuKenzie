import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    gap: 20px;
    padding: 30px 20px 42px 20px;

    border: 1px solid rgb(0, 0, 0, 0.2);

    button {
        height: 48px;
        width: 100%;
        padding: 15px 13px;

        border-radius: var(--radius);
        border: none;
        background-color: var(--primary);
        color: white;
        text-align: center;
        font-weight: 700;
        cursor: pointer;
    }

    @media (min-width: 769px) {
    }
`;
