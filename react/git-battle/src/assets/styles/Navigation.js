import styled from 'styled-components';

export const NavigationStyle = styled.aside`
    background: #f5e7e6;
    color: black;
    position: fixed;
    width: 10%;
    height: 83.5%;
    font-family: 'Poppins', sans-serif;
    border-right: 2px solid black;

    & div {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
        text-align: center;

        span {
            border: 0;
            border-bottom: 2px solid black;
            padding: 35.75%;
            background-color: #f5e7e6;
            outline: none;
            font-family: 'Poppins', sans-serif;
            font-weight: bold;
        }
    }
`;