import React from 'react';
import './Header.css'
import NavBar from '../NavBar/NavBar';

const Header = ()=>{
    const paths = [{name: "Home", link: "/"}]
    return(
        <header>
            <div>
                <h1>Essenciales de React</h1>
                <h6>por Andrés Pata Fraile de Manterola</h6>
            </div>
            <NavBar paths={paths}/>
        </header>
    )
}

export default Header