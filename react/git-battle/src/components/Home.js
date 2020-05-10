import React from 'react';
import { NavLink } from 'react-router-dom';
import { HomeContainer } from '../assets/styles/Home';

const Home = () => {

    let render = (
        <HomeContainer>
            <h1> Compare yourself with other people! </h1>
            <h2> Start fighting now! </h2>
            <NavLink to="/battle"> FIGHT </NavLink>
        </HomeContainer>
    );
    return render;
}

export default Home;