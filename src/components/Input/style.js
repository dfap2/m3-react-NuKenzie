import styled from "styled-components";

export const StyledFieldset = styled.fieldset`
    box-sizing: border-box;

    .label {
        display: block;

        font-size: var(--body);
        margin-bottom: 15px;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }

    input {
        box-sizing: border-box;

        width: 100%;
        height: 48px;
        padding-inline: 16px;

        border-radius: var(--radius);
        background-color: var(--grey-1);
    }

    select {
        width: 100%;
        height: 48px;
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        input[type="number"] {
            -moz-appearance: textfield;
        }
        padding-inline: 16px;

        border-radius: var(--radius);
        background-color: var(--grey-1);
        color: var(--grey-3);
        cursor: pointer;
    }

    select > option {
        width: 100%;
        height: 48px;

        border-radius: var(--radius);
        background-color: var(--grey-1);
    }

    @media (min-width: 769px) {
        width: 314px;
    }
`;
