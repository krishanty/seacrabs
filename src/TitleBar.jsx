import React from 'react';
import './TitleBar.css'
 
const TitleBar = ({ onNavClick }) => {
    return (
        <header>
            <div className="header-container">
                <div id = "title">CRABs</div>
                <nav className="header-nav" aria-label="Main Navigation">
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#about" class="nav-link">About</a></li>
                        <li className="nav-item"><a href="#news" class="nav-link">News</a></li>
                        <li className="nav-item"><a href="#contact" class="nav-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default TitleBar