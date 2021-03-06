import React from 'react';
import { NavigationStyle } from '../assets/styles/Navigation';
import {NavLink} from 'react-router-dom';
import '../base/App.css';

const Navigation = () => {
   
    let content = (
        <NavigationStyle>
            <div>
                <span> <NavLink exact to="/" className="nav-link"> Home </NavLink> </span>
                <span> <NavLink exact to="/battle" className="nav-link"> Battle </NavLink> </span>
            </div>
        </NavigationStyle>
    );
    return content;
}

export default Navigation;