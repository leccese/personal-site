import React from 'react';
import { Link } from 'gatsby';
import { StaticImage }  from 'gatsby-plugin-image'

import './navBar.css';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <Link to="/">
                <StaticImage 
                    src='../images/logo_v2.png' 
                    alt="icon"
                    height={60}
                    width={60}
                />
            </Link>
            <nav>
                <Link to="/digital-garden">Digital Garden</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}