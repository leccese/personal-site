import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

import "./navBar.css";

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/">
        <StaticImage
          src="../../images/logo.png"
          alt="isabel.tech"
          height={100}
        />
      </Link>
      <nav>
        <Link to="/digital-garden">Digital Garden</Link>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div>
              {theme === "dark" ? (
                <FontAwesomeIcon
                  icon={faSun}
                  onClick={() => toggleTheme("light")}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faMoon}
                  onClick={() => toggleTheme("dark")}
                />
              )}
            </div>
          )}
        </ThemeToggler>
      </nav>
    </div>
  );
}
