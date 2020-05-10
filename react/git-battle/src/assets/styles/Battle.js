import styled from 'styled-components';


export const BattleContainer = styled.div`
    display: grid;
    margin-left: 10%;
    text-align: center;
    width: 82%;
    color: black;
    font-family: 'Poppins', sans-serif;

    & h2 {
    }


    & div {
        display: grid;
        grid-template-columns: 1fr 0.2fr 1fr;

        & h1 {
            margin-top: 4.5em;
            font-family: 'Poppins', sans-serif;
            font-size: 50px;
        }

        & div {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 0.1fr 0.2fr 0.8fr 0.2fr 0.1fr;
            justify-content: center;
            align-content: center;
            align-items: center;
            justify-items: center;
            height: 550px;
            grid-gap: 1em;
            
            & form {
                width: 100%;
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: auto;
                justify-content: center;
                align-content: center;
                align-items: center;
                justify-items: center;
                grid-gap: 0.5em;

                & input {
                    width: 25%;
                    padding: 10px;
                    border: 2px solid #f5e7e6;
                    border-radius: 10px;
                    font-family: 'Poppins', sans-serif;
                    outline: none;
                }

                & input:focus {
                    transition: 1s;
                    border: 2px solid black;
                }

                & input:not(:focus) {
                    transition: 1s;
                }

                & button {
                    width: 20%;
                    background-color: #f5e7e6;
                    color: black;
                    border: 2px solid black;
                    border-radius: 10px;
                    padding: 10px;
                    font-family: 'Poppins', sans-serif;
                    text-transform: uppercase;
                    font-weight: bold;
                    cursor: pointer;    
                    outline: none;
                }

                & button:hover{
                    transition: 1s;
                    transform: scale(1.05);
                }

                & button:not(:hover) {
                    transition: 1s;
                    transform: scale(1);
                }

            }
            
            & img {
                    width: 150px;
                    height: 150px;
                    padding: 10px;
                    border: 2px solid #f5e7e6;
                    border-radius: 10px;
                }

            & span {
                & span {
                    color: #ff6e6e;
                    font-size: 18px;
                }
            }
        }
    }

    & input[type="button"] {
        position: absolute;
        left: 46%;
        top: 77%;
        width: 10%;
        padding: 10px;
        background-color: #f5e7e6;
        border: 2px solid black;
        border-radius: 10px;
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        font-size: 18px;
        cursor: pointer;
        outline: none;
    }

    & h4 {
        text-align: center;
        margin-top: 60px;
    }

`;