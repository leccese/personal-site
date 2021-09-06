import React from 'react';
import { Link } from 'gatsby';
import { StaticImage }  from 'gatsby-plugin-image'

import './navBar.css';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <Link to="/">
                <StaticImage 
                    src='../images/icon.png' 
                    alt="icon"
                    height={50}
                    width={50}
                />
            </Link>
            <nav>
                <Link to="/notes">Notes</Link>
                <Link to="/about">About</Link>
            </nav>
        </div>
    )
}