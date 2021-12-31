import React from 'react';
import { Link } from 'gatsby';
import { StaticImage }  from 'gatsby-plugin-image'

import './navBar.css';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <Link to="/">
                <StaticImage 
                    src='../../images/logo.png' 
                    alt="isabel.tech"
                    height={100}
                />
            </Link>
            <nav>
                <Link to="/digital-garden">Digital Garden</Link>
            </nav>
        </div>
    )
}