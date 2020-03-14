import React from 'react';
import styled from 'styled-components';


const SuccessButton = styled.button`
    width: 7%;
    border: 3px solid white;
    border-radius: 25px;
    padding: 10px 30px 10px 30px;
    margin-left: 2.5%;
    color: white;
    outline: none;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    background-color: #25ba6a;

    &:hover {
        transition: 1s;
        color: #25ba6a;
        background-color: white;
        border: 3px solid #25ba6a;
    }
    
    &:not(:hover) {
        transition: 1s;
    }
`;

const WarningButton = styled.button`
    width: 7%;
    border: 3px solid white;
    border-radius: 25px;
    padding: 10px 30px 10px 30px;
    margin-left: 2.5%;
    color: white;
    outline: none;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    background-color: #ffb433;

    &:hover {
        transition: 1s;
        color: #ffb433;
        background-color: white;
        border: 3px solid #ffb433;
    }
    
    &:not(:hover) {
        transition: 1s;
    }
`;

const ErrorButton = styled.button`
    width: 7%;
    border: 3px solid white;
    border-radius: 25px;
    padding: 10px 30px 10px 30px;
    margin-left: 2.5%;
    color: white;
    outline: none;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;
    background-color: #fa0000;

    &:hover {
        transition: 1s;
        color: #fa0000;
        background-color: white;
        border: 3px solid #fa0000;
    }
    
    &:not(:hover) {
        transition: 1s;
    }
`;

const Button = (props) => {
    let content = (
        <div>
            {props.type === "success" ? <SuccessButton> Success </SuccessButton> : null}
            {props.type === "warning" ? <WarningButton> Warning </WarningButton> : null}
            {props.type === "error" ? <ErrorButton> Error </ErrorButton> : null}
        </div>
    );


    return content;
}

export default Button;