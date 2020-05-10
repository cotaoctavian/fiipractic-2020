import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: grid;
    margin: auto;
    margin-top: 7em;
    text-align: center;
    width: 82%;
    color: black;
    font-family: 'Poppins', sans-serif;

    & a {
        width: 10%;
        margin: auto;
        border: 2px solid black;
        border-radius: 5px;
        padding: 10px;
        background-color: #f5e7e6;
        font-weight: bold;
        font-family: 'Poppins', sans-serif;
        text-decoration: none;
        color: black;
    }
`;