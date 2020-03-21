import React, { useState } from 'react';
import { MenuStyle } from '../assets/styles/Menu';
import Modal from './Modal';

const Menu = ({ container }) => {
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
            {container === "profile" ? <span> Profile page </span> : null }
            {container === "battle" ? <span> Battle page </span> : null }

        </MenuStyle>
    );
    return content;
}

export default Menu;