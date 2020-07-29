import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logoLipeFlix.png';
import './Menu.css';
import Button from '../Buttons';
//import ButtonLink from './Buttons';

function Menu() {
    return (
        <nav className="Menu" >
            <Link to="/">
                <img className="Logo" src={Logo} alt="LipeFlix" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/Cadastro/Video">
                Novo Video
            </Button>
        </nav>
    );
}

export default Menu;