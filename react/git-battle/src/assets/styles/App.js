import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    body {
        margin: 0;
        background: rgb(150,165,203);
        background: linear-gradient(90deg, rgba(150,165,203,1) 0%, rgba(235,169,165,1) 46%, rgba(152,170,221,1) 100%);
    }
`;

export const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 25px;
    margin-top: 20%;
    margin-left: 43%;
    justify-content: center;
    align-items: center;

    & span {
        color: white;
        font-family: 'Poppins', sans-serif;
        font-size: 20px;
        font-weight: bold;
    }
`;