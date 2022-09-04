import React, {} from 'react';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <ul>
                <li><Link to="/chefs">Chefs</Link></li>
            </ul>
        </header>
    );
}

export default Header;