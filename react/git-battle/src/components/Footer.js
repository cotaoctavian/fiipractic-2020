import React from 'react';
import { FooterStyle } from '../assets/styles/Footer';

const Footer = () => {
    let content = (
        <FooterStyle>
            <div>
                <span> Git Battle ⚔️ </span>
                <span> ©️ 2020, Octavian 👨‍🎨 </span>
            </div>
        </FooterStyle>
    );
    return content;
}

export default Footer;