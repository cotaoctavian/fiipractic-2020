import styled from 'styled-components';

export const NavigationStyle = styled.aside`
    background: #f5e7e6;;
    color: black;
    position: absolute;
    width: 10%;
    height: 83.5%;
    font-family: 'Poppins', sans-serif;

    & ul {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        list-style-type: none;
        text-align: center;

        li {
            margin-left: -26%;
            border-bottom: 1px solid black;
            padding: 41%;
        }
    }
`;