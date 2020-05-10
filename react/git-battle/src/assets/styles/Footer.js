import styled from 'styled-components';

export const FooterStyle = styled.footer`
    background: #f5e7e6;
    color: black;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 8%;
    font-family: 'Poppins', sans-serif;
    border-top: 2px solid black;

    & div {
        display: flex;
        
        & span:nth-child(1) {
            flex: 1;
            font-size: 18px;
            margin-top: 1.5%;
            margin-left: 2%;
            font-weight: bold;
        }

        & span:nth-child(2) {
            flex: 0.2;
            margin-top:1.5%;
            font-size: 16px;
            font-weight: bold;
        }
    }
`;