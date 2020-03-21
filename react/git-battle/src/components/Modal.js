import React, {useState} from 'react';
import { ModalContainer } from '../assets/styles/Modal';

const Modal = () => {
    const [message, setMessage] = useState('')

    const handleSubmit = () => {
        if(message === '') setMessage('Hello!');
        else setMessage('');
    }

    let content = (
        <ModalContainer>
            <span> No content available. ❌ </span>

            <div>
                <p> {message} </p>
            </div>

            <input  type="button" value="Submit" onClick={handleSubmit} />
        </ModalContainer>
    );
    return content;
}

export default Modal;