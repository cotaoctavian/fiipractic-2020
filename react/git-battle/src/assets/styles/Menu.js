import styled from 'styled-components';

export const MenuStyle = styled.main`
    background: white;
    color: black;
    position: fixed;
    left: 10%;
    width: 70%;
    height: 83.5%;
    border-left: 1px solid black;
    font-family: 'Poppins', sans-serif;

    & button {
        background-color: white;
        border: 2px solid #f5e7e6;
        border-radius: 25px;
        outline: none;
        width: 12%;
        color: black;
        padding: 10px;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        margin-left: 44%;
        margin-top: 10%;
    }
`;

export const BattleDiv = styled.div`
    color: black;
    display: grid;
    text-align: center;
    margin-left: 16%;
    margin-top: 10%;
`;