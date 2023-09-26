import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --primary: #FD377E;
        --primary-2: #E34981;
        --secondary: #03B898;
        --grey-4: #212529;
        --grey-3: #868e96;
        --grey-2: #e9ecef;
        --grey-1: #f8f9fa;

        --title-1: 2.375rem;
        --title-2: 1.375rem;
        --title-3: 1rem;
        --title-4: 0.75rem;
        --headline: 1rem;
        --body: 0.75rem;

        --radius: 8px;
    }          

    body {  
        font-family: 'Inter', sans-serif;

        width: 100vw;
        height: 100vh;
    }

    h1,
    h2,
    h3,
    h4 {
        font-weight: 700;
        color: var(--color-grey-4);
    }

    span, label {
        font-weight: 400;
        color: var(--color-grey-4);
    }

    input, select {
        border: none;
        outline: none;
    }

    fieldset {
        all: unset;
    }
`;
