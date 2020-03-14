import React from 'react';
import { NavigationStyle } from '../assets/styles/Navigation';

const Navigation = () => {
    let content = (
        <NavigationStyle>
            <ul> 
                <li> 1 </li>
                <li> 2 </li>
                <li> 3 </li>
                <li> 4 </li>
                <li> 5 </li>
            </ul>
        </NavigationStyle>
    );
    return content;
}

export default Navigation;