import styled from 'styled-components';

export const ModalContainer = styled.div`
    background-color: #f5e7e6;
    border: 3px solid black;
    border-radius: 15px;
    color: black;
    margin-left: 16%;
    margin-top: 5%;
    padding-top: 2%;
    text-align: center;

    & span {
        font-size: 25px;
    }

    & input {
        background-color: white;
        margin-bottom: 2%;
        border: 2px solid black;
        border-radius: 25px;
        padding: 10px 30px 10px 30px;
        font-family: 'Poppins', sans-serif;
        color: black;
        font-size: 15px;
        outline: none;
    }

    & div {
        background-color: white;
        border-radius: 15px;
        border: 2px solid black;
        width: 60%;
        height: 250px;
        margin-top: 2%;
        margin-left: 20%;
        margin-bottom: 5%;

        & p {
            color: black;
        }
    }
`;