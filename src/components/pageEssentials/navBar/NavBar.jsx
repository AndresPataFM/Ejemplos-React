import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = ({paths})=>{
    return(
        <nav>
            <ul>
                {paths.map(x =><li key={x.link+x.name}><Link to={x.link}>{x.name}</Link></li> )}
            </ul>
        </nav>
    )
}

export default NavBar