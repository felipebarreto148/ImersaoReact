import React from 'react';
import Logo from '../assets/img/logoLipeFlix.png';
import './Menu.css';
import ButtonLink from './components/Buttons';

function Menu() {
    return (
        <nav className="Menu" >
            <a href="/">
                <img className="Logo" src={Logo} alt="LipeFlix" />
            </a>

            <ButtonLink className="ButtonLink" href="/">
                Novo Video
            </ButtonLink>
        </nav>
    );
}

export default Menu;