import React, { useState } from 'react';
import { MenuStyle, BattleDiv } from '../assets/styles/Menu';
import Modal from './Modal';

const BattleContainer = ({ result }) => {

    const [showResult, setShowResult] = useState(false)

    const handleClick = () => {
        setShowResult(!showResult)
    }

    return (
        <BattleDiv>
            {result !== null ? result.slice(0, 5).map(item => {
                return (<span> <b>Name: </b> {item.name} <b>Height: </b> {item.height} <b>Mass: </b> {item.mass}</span>)
            }) : null}


            {showResult ? result.slice(5, 10).map(item => {
                return (<span> <b>Name: </b> {item.name} <b>Height: </b> {item.height} <b>Mass: </b> {item.mass}</span>)
            }) : null}

            {showResult ? <button onClick={handleClick}> Hide data  </button> : <button onClick={handleClick}> Show data  </button>}

        </BattleDiv>
    );
}

const Menu = ({ container, result }) => {
    const [showUpMessage, setShowUpMessage] = useState(false)
    const [message, setMessage] = useState('Show content')


    const handleClick = () => {
        setShowUpMessage(!showUpMessage)
        if (showUpMessage === false) setMessage("Hide content")
        else setMessage("Show content")
    }

    let content = (
        <MenuStyle>
            {container === "home" ?
                <div> {showUpMessage ? <Modal /> : null}
                    <button onClick={handleClick}> {message} </button>
                </div> : null}

            {container === "battle" ?
                <BattleContainer result={result} />
                : null}
        </MenuStyle>
    );
    return content;
}

export default Menu;